import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { MatDialogRef, MatChipInputEvent } from '@angular/material';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-topic-dialog',
  templateUrl: './topic-dialog.component.html',
  styleUrls: ['./topic-dialog.component.css']
})
export class TopicDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TopicDialogComponent>,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private appService: AppService
  ) {}

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags = ['general'];

  loading = false;

  newTopicForm = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required]
    }),
    message: new FormControl('', {
      validators: [Validators.required]
    })
  });

  get title() {
    return this.newTopicForm.get('title');
  }

  get message() {
    return this.newTopicForm.get('message');
  }

  ngOnInit() {}

  add(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: string) {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  async createNewTopic() {
    if (!this.newTopicForm.valid || this.tags.length === 0) {
      return;
    }

    if (this.loading) {
      return;
    }

    this.loading = true;
    this.appService.setProgressBarStatus(true);

    try {
      const batch = this.afs.firestore.batch();

      const topicDocRef = this.afs.firestore.collection('topics').doc();

      batch.set(topicDocRef, {
        author: this.afAuth.auth.currentUser.uid,
        replyCount: 0,
        tags: this.tags,
        createdOn: firebase.firestore.FieldValue.serverTimestamp(),
        lastActivity: firebase.firestore.FieldValue.serverTimestamp(),
        title: this.title.value
      });

      batch.set(this.afs.firestore.collection(`/topics/${topicDocRef.id}/replies`).doc(), {
        author: this.afAuth.auth.currentUser.uid,
        likes: 0,
        message: this.message.value,
        first: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      await batch.commit();
    } finally {
      this.loading = false;
      this.appService.setProgressBarStatus(false);
      this.dialogRef.close();
    }
  }
}
