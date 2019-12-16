import { Component, OnDestroy } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";

import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { Subscription, timer } from "rxjs";

import { ReplyDialogComponent } from "../reply-dialog/reply-dialog.component";
import { AppService } from "../app.service";

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
  selector: "app-topic",
  templateUrl: "./topic.component.html",
  styleUrls: ["./topic.component.css"]
})
export class TopicComponent implements OnDestroy {
  constructor(
    public afAuth: AngularFireAuth,
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
    const topicID = this.route.snapshot.paramMap.get("topicID");

    try {
      const res = await fetch(`${AppService.API}/GetTopic?topic=${topicID}`);
      this.topic = (await res.json()) as Topic;
      this.topic.topicID = topicID;
    } catch (error) {
      console.error(error);
    }

    this.subscriptions.push(timer(0, 3000).subscribe(() => this.loadReplies()));
  }

  private async loadReplies() {
    try {
      const res = await fetch(
        `${AppService.API}/GetReplies?topic=${this.topic.topicID}`
      );
      const replies = await res.json();
      replies.map((reply, i) => {
        const liked = this.isLikingReply(reply.likers);
        replies[i] = { ...reply, liked: liked };
      });
      this.replies = replies;
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }

  isLikingReply(likers: string[]) {
    if (!this.afAuth.auth.currentUser) {
      return false;
    }

    if (likers.includes(this.afAuth.auth.currentUser.uid)) {
      return true;
    }

    return false;
  }

  async likeReply(replyID: string) {
    if (!this.afAuth.auth.currentUser) {
      this.snackBar.open("Please login first", "OK");
      return;
    }

    if (this.buttonDisabled) {
      return;
    }

    this.buttonDisabled = true;
    this.appService.setProgressBarStatus(true);

    try {
      const uid = this.afAuth.auth.currentUser.uid;

      await fetch(`${AppService.API}/LikeReply?uid=${uid}&replyID=${replyID}`);
      let i = this.replies.length;
      while (i--) {
        if (this.replies[i]["replyID"] == replyID) {
          this.replies[i].likes++;
          this.replies[i].likers.push(uid);
        }
      }
    } finally {
      this.buttonDisabled = false;
      this.appService.setProgressBarStatus(false);
    }
  }

  async unlikeReply(replyID: string) {
    if (!this.afAuth.auth.currentUser) {
      this.snackBar.open("Please login first", "OK");
      return;
    }

    if (this.buttonDisabled) {
      return;
    }

    this.buttonDisabled = true;
    this.appService.setProgressBarStatus(true);

    try {
      const uid = this.afAuth.auth.currentUser.uid;

      await fetch(
        `${AppService.API}/UnlikeReply?uid=${uid}&replyID=${replyID}`
      );

      let i = this.replies.length;
      while (i--) {
        if (this.replies[i]["replyID"] == replyID) {
          this.replies[i].likes--;
          this.replies[i].likers = this.replies[i].likers.filter(
            e => e !== uid
          );
        }
      }
    } finally {
      this.buttonDisabled = false;
      this.appService.setProgressBarStatus(false);
    }
  }

  async openDialog() {
    if (!this.afAuth.auth.currentUser) {
      this.snackBar.open("Please login first", "OK");
      return;
    }

    this.dialog.open(ReplyDialogComponent, {
      data: { topicTitle: this.topic.title, topicID: this.topic.topicID },
      width: "90%",
      maxWidth: "800px"
    });
  }

  async deleteReply(replyID: string) {
    if (this.buttonDisabled) {
      return;
    }

    this.buttonDisabled = true;
    this.appService.setProgressBarStatus(true);

    try {
      await fetch(
        `${AppService.API}/DeleteReply?replyID=${replyID}&topicID=${this.topic.topicID}`
      );

      let i = this.replies.length;
      while (i--) {
        if (this.replies[i]["replyID"] == replyID) {
          this.replies.splice(i, 1);
        }
      }
    } finally {
      this.buttonDisabled = false;
      this.appService.setProgressBarStatus(false);
    }
  }

  ngOnDestroy() {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}
