import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { MatSnackBar, MatDialog } from '@angular/material';

import { Subscription } from 'rxjs';

import { ReplyDialogComponent } from '../reply-dialog/reply-dialog.component';
import { AppService } from '../app.service';

export interface Topic {
  author: string;
  replyCount: number;
  title: string;
  tags: string[];
  topicID: string;
  lastActivity: firebase.firestore.Timestamp;
  createdOn: firebase.firestore.Timestamp;
}

export interface Reply {
  author: string;
  likes: number;
  message: string;
  timestamp: firebase.firestore.Timestamp;
}

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnDestroy {
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.subscriptions.push(
      this.router.events.subscribe(async event => {
        if (event instanceof NavigationEnd) {
          await this.loadPostDetails();
        }
      })
    );
  }

  topic: Topic;
  replies = [];

  loading = true;

  buttonDisabled = false;

  private subscriptions: Subscription[] = [];

  private async loadPostDetails() {
    const topicID = this.route.snapshot.paramMap.get('topicID');

    const doc = await this.afs.firestore.doc(`topics/${topicID}`).get();
    this.topic = doc.data() as Topic;
    this.topic.topicID = topicID;

    this.subscriptions.push(
      this.afs
        .collection(this.afs.firestore.collection(`topics/${topicID}/replies`), ref =>
          ref.orderBy('timestamp')
        )
        .snapshotChanges()
        .subscribe(async docChangeArray => {
          try {
            const replies = new Array(docChangeArray.length);
            const promises: Promise<void>[] = [];

            docChangeArray.map((docChange, i) => {
              promises.push(
                (async () => {
                  const docData = docChange.payload.doc.data() as Reply;
                  const userData = await this.getUserDetails(docData.author);
                  const isLiking = await this.isLikingReplay(docChange.payload.doc.id);
                  replies[i] = {
                    ...docData,
                    timestamp: docData.timestamp.toDate(),
                    author: userData.name,
                    authorImage: userData.img,
                    authorUID: docData.author,
                    replyID: docChange.payload.doc.id,
                    liked: isLiking
                  };
                })()
              );
            });

            await Promise.all(promises);
            this.replies = replies;
          } finally {
            this.loading = false;
          }
        })
    );
  }

  async getUserDetails(uid: string) {
    const res = await fetch(`/api/GetUser?uid=${uid}`);
    return await res.json();
    // return {
    //   img:
    //     'https://lh4.googleusercontent.com/-VQRmUnNvKpE/AAAAAAAAAAI/AAAAAAAAC2k/j08g7-53py8/photo.jpg',
    //   name: 'Rajveer Malviya'
    // };
  }

  async isLikingReplay(replyID: string) {
    if (!this.afAuth.auth.currentUser) {
      return;
    }

    const doc = await this.afs.firestore
      .doc(
        `/topics/${this.topic.topicID}/replies/${replyID}/likers/${
          this.afAuth.auth.currentUser.uid
        }`
      )
      .get();

    if (doc.exists) {
      return true;
    }

    return false;
  }

  async likeReply(replyID: string) {
    if (!this.afAuth.auth.currentUser) {
      this.snackBar.open('Please login first', 'OK');
      return;
    }

    if (this.buttonDisabled) {
      return;
    }

    this.buttonDisabled = true;
    this.appService.setProgressBarStatus(true);

    try {
      const batch = this.afs.firestore.batch();

      batch.set(
        this.afs.firestore.doc(
          `/topics/${this.topic.topicID}/replies/${replyID}/likers/${
            this.afAuth.auth.currentUser.uid
          }`
        ),
        { timestamp: firebase.firestore.FieldValue.serverTimestamp() }
      );

      batch.update(this.afs.firestore.doc(`/topics/${this.topic.topicID}/replies/${replyID}`), {
        likes: firebase.firestore.FieldValue.increment(1)
      });

      await batch.commit();
    } finally {
      this.buttonDisabled = false;
      this.appService.setProgressBarStatus(false);
    }
  }

  async unlikeReply(replyID: string) {
    if (!this.afAuth.auth.currentUser) {
      this.snackBar.open('Please login first', 'OK');
      return;
    }

    if (this.buttonDisabled) {
      return;
    }

    this.buttonDisabled = true;
    this.appService.setProgressBarStatus(true);

    try {
      const batch = this.afs.firestore.batch();

      batch.delete(
        this.afs.firestore.doc(
          `/topics/${this.topic.topicID}/replies/${replyID}/likers/${
            this.afAuth.auth.currentUser.uid
          }`
        )
      );

      batch.update(this.afs.firestore.doc(`/topics/${this.topic.topicID}/replies/${replyID}`), {
        likes: firebase.firestore.FieldValue.increment(-1)
      });

      await batch.commit();
    } finally {
      this.buttonDisabled = false;
      this.appService.setProgressBarStatus(false);
    }
  }

  async openDialog() {
    if (!this.afAuth.auth.currentUser) {
      this.snackBar.open('Please login first', 'OK');
      return;
    }

    this.dialog.open(ReplyDialogComponent, {
      data: { topicTitle: this.topic.title, topicID: this.topic.topicID },
      width: '90%',
      maxWidth: '800px'
    });
  }

  async deleteReply(replyID: string) {
    if (this.buttonDisabled) {
      return;
    }

    this.buttonDisabled = true;
    this.appService.setProgressBarStatus(true);

    try {
      await this.afs.firestore.runTransaction(async txn => {
        const likers = await this.afs.firestore
          .collection(`/topics/${this.topic.topicID}/replies/${replyID}/likers`)
          .get();
        if (likers.size !== 0) {
          likers.docs.map(doc => {
            txn.delete(doc.ref);
          });
        }
        txn.delete(this.afs.firestore.doc(`/topics/${this.topic.topicID}/replies/${replyID}`));

        txn.update(this.afs.firestore.doc(`/topics/${this.topic.topicID}`), {
          replyCount: firebase.firestore.FieldValue.increment(-1)
        });
      });
    } finally {
      this.buttonDisabled = false;
      this.appService.setProgressBarStatus(false);
    }
  }

  async deleteTopic() {
    if (this.replies.length !== 1) {
      this.snackBar.open('No replies should exists inorder to delete a topic.', 'OK');
      return;
    }

    if (this.buttonDisabled) {
      return;
    }

    this.buttonDisabled = true;
    this.appService.setProgressBarStatus(true);

    try {
      if (this.replies[0].first !== true) {
        this.buttonDisabled = true;
        this.appService.setProgressBarStatus(false);
        return;
      }

      const replyID = this.replies[0].replyID;

      await this.afs.firestore.runTransaction(async txn => {
        const likers = await this.afs.firestore
          .collection(`/topics/${this.topic.topicID}/replies/${replyID}/likers`)
          .get();
        likers.docs.map(doc => {
          txn.delete(doc.ref);
        });

        txn.delete(this.afs.firestore.doc(`/topics/${this.topic.topicID}/replies/${replyID}`));

        txn.delete(this.afs.firestore.doc(`/topics/${this.topic.topicID}`));
      });
    } finally {
      this.buttonDisabled = true;
      this.appService.setProgressBarStatus(false);
      await this.router.navigate(['']);
    }
  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => {
      subscription.unsubscribe();
    });
  }
}
