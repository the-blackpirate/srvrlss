import { Component, OnInit, OnDestroy } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";

import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";

import { Subscription, timer } from "rxjs";

import { Topic } from "../topic/topic.component";
import { TopicDialogComponent } from "../topic-dialog/topic-dialog.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  topics: Topic[] = [];

  loading = true;

  subs: Subscription[] = [];

  displayedColumns: string[] = ["title", "time", "replies"];
  dataSource: MatTableDataSource<Topic>;

  ngOnInit() {
    this.subs.push(timer(0, 3000).subscribe(() => this.getTopics()));
  }

  ngOnDestroy() {
    for (const sub of this.subs) {
      sub.unsubscribe();
    }
  }

  async getTopics() {
    try {
      const res = await fetch("http://localhost:3000/GetTopics");
      this.topics = await res.json();

      console.log(this.topics);
      this.dataSource = new MatTableDataSource(this.topics);
    } catch (e) {
      console.error(e);
    } finally {
      this.loading = false;
    }
  }

  async openNewTopicDialog() {
    if (!this.afAuth.auth.currentUser) {
      this.snackBar.open("Please login first", "OK");
      return;
    }

    this.dialog.open(TopicDialogComponent, {
      width: "90%",
      maxWidth: "800px"
    });
  }
}
