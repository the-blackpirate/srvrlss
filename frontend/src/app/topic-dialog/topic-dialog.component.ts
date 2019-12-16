import { Component, OnInit } from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";

import { AngularFireAuth } from "@angular/fire/auth";

import { MatChipInputEvent } from "@angular/material/chips";
import { MatDialogRef } from "@angular/material/dialog";

import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AppService } from "../app.service";

@Component({
  selector: "app-topic-dialog",
  templateUrl: "./topic-dialog.component.html",
  styleUrls: ["./topic-dialog.component.css"]
})
export class TopicDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TopicDialogComponent>,
    private afAuth: AngularFireAuth,
    private appService: AppService
  ) {}

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags = ["general"];

  loading = false;

  newTopicForm = new FormGroup({
    title: new FormControl("", {
      validators: [Validators.required]
    }),
    message: new FormControl("", {
      validators: [Validators.required]
    })
  });

  get title() {
    return this.newTopicForm.get("title");
  }

  get message() {
    return this.newTopicForm.get("message");
  }

  ngOnInit() {}

  add(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    if ((value || "").trim()) {
      this.tags.push(value.trim());
    }

    if (input) {
      input.value = "";
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
      const uid = this.afAuth.auth.currentUser.uid;

      await fetch(`${AppService.API}/CreateTopic`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: uid,
          tags: this.tags,
          title: this.title.value,
          message: this.message.value
        })
      });
    } finally {
      this.loading = false;
      this.appService.setProgressBarStatus(false);
      this.dialogRef.close();
    }
  }
}
