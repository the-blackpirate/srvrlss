import { Component, OnInit, OnDestroy } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';

import { Subscription } from 'rxjs';
import { Topic } from '../topic/topic.component';
import { TopicDialogComponent } from '../topic-dialog/topic-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  private subscriptions: Subscription[] = [];

  topics: Topic[] = [];

  loading = true;

  displayedColumns: string[] = ['title', 'time', 'replies'];
  dataSource: MatTableDataSource<Topic>;

  ngOnInit() {
    this.getTopics();
  }

  ngOnDestroy() {}

  async getTopics() {
    this.subscriptions.push(
      this.afs
        .collection(this.afs.firestore.collection('topics'), ref =>
          ref.orderBy('lastActivity', 'desc')
        )
        .snapshotChanges()
        .subscribe(async docChangeArray => {
          try {
            const topics = new Array(docChangeArray.length);
            const promises: Promise<void>[] = [];

            docChangeArray.map((docChange, i) => {
              promises.push(
                (async () => {
                  const docData = docChange.payload.doc.data() as Topic;
                  topics[i] = {
                    ...docData,
                    topicID: docChange.payload.doc.id,
                    lastActivity: docData.lastActivity.toDate()
                  };
                })()
              );
            });

            await Promise.all(promises);
            this.topics = topics;
            this.dataSource = new MatTableDataSource(this.topics);
          } finally {
            this.loading = false;
          }
        })
    );
  }

  async openNewTopicDialog() {
    if (!this.afAuth.auth.currentUser) {
      this.snackBar.open('Please login first', 'OK');
      return;
    }

    this.dialog.open(TopicDialogComponent, {
      width: '90%',
      maxWidth: '800px'
    });
  }
}
