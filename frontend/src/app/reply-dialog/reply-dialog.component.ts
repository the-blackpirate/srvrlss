import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-reply-dialog',
  templateUrl: './reply-dialog.component.html',
  styleUrls: ['./reply-dialog.component.css']
})
export class ReplyDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ReplyDialogComponent>,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private appService: AppService,
    @Inject(MAT_DIALOG_DATA) public data: { topicTitle: string; topicID: string }
  ) {}

  addReplyForm = new FormGroup({
    message: new FormControl('', {
      validators: [Validators.required]
    })
  });
  loading = false;

  get message() {
    return this.addReplyForm.get('message');
  }

  async addReply() {
    if (!this.addReplyForm.valid) {
      return;
    }

    if (this.loading) {
      return;
    }
    this.loading = true;
    this.appService.setProgressBarStatus(true);

    try {
      const batch = this.afs.firestore.batch();
      const uid = this.afAuth.auth.currentUser.uid;

      batch.set(this.afs.firestore.collection(`/topics/${this.data.topicID}/replies/`).doc(), {
        author: uid,
        likes: 0,
        message: this.message.value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      batch.update(this.afs.firestore.doc(`/topics/${this.data.topicID}/`), {
        replyCount: firebase.firestore.FieldValue.increment(1),
        lastActivity: firebase.firestore.FieldValue.serverTimestamp()
      });

      await batch.commit();
    } finally {
      this.loading = false;
      this.appService.setProgressBarStatus(false);
      this.dialogRef.close();
    }
  }

  ngOnInit() {}
}
