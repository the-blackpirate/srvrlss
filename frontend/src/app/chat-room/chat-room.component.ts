import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

interface AppData {
  message: string;
  uid: string;
  docID: string;
}

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent {
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe(user => {
      if (!user) {
        return;
      }
      this.uid = user.uid;
      this.name = user.displayName;
      this.afs
        .collection('messages')
        .snapshotChanges()
        .subscribe(data => {
          this.appData = [];
          data.forEach(docChange => {
            const doc = docChange.payload.doc;
            const docData = doc.data() as any;
            this.appData.push({
              message: docData.message,
              uid: docData.uid,
              docID: doc.id
            });
          });
        });
    });
  }

  messageWithName = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required]
    }),
    message: new FormControl('', {
      validators: [Validators.required]
    })
  });

  appData: AppData[] = [];
  isWaiting = false;

  uid = '';
  name = '';

  get message() {
    return this.messageWithName.get('message');
  }

  async updateData() {
    if (this.messageWithName.valid) {
      if (!this.isWaiting) {
        this.isWaiting = true;
        const message = this.message.value;
        this.message.setValue('');
        try {
          firebase.firestore.FieldValue.serverTimestamp();
          await this.afs.collection('messages').add({ message, uid: this.uid });
        } catch (error) {
          console.error(error);
        } finally {
          this.isWaiting = false;
        }
      }
    }
  }

  async deleteMessage(docID: string) {
    return this.afs
      .collection('messages')
      .doc(docID)
      .delete();
  }
}
