import { Component, Inject } from "@angular/core";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { AngularFireAuth } from "@angular/fire/auth";

import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AppService } from "../app.service";

@Component({
  selector: "app-reply-dialog",
  templateUrl: "./reply-dialog.component.html",
  styleUrls: ["./reply-dialog.component.css"]
})
export class ReplyDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ReplyDialogComponent>,
    private afAuth: AngularFireAuth,
    private appService: AppService,
    @Inject(MAT_DIALOG_DATA)
    public data: { topicTitle: string; topicID: string }
  ) {}

  addReplyForm = new FormGroup({
    message: new FormControl("", {
      validators: [Validators.required]
    })
  });
  loading = false;

  get message() {
    return this.addReplyForm.get("message");
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
      const uid = this.afAuth.auth.currentUser.uid;

      await fetch(`${AppService.API}/CreateReply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topicID: this.data.topicID,
          message: this.message.value,
          author: uid
        })
      });
    } finally {
      this.loading = false;
      this.appService.setProgressBarStatus(false);
      this.dialogRef.close();
    }
  }
}
