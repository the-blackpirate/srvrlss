import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private afAuth: AngularFireAuth, private appService: AppService) {
    this.afAuth.authState.subscribe(user => {
      this.loading = false;
      if (!user) {
        return;
      }
      this.loggedIn = true;
    });

    this.appService.progressBarStatus.subscribe(status => {
      this.progressBarLoading = status;
    });
  }

  progressBarLoading = false;
  loggedIn = false;
  loading = true;

  async login() {
    await this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  async logout() {
    await this.afAuth.auth.signOut();
    location.reload();
  }
}
