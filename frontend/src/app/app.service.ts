import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor() {}

  static API = "http://localhost:3000";

  progressBarStatus = new BehaviorSubject<boolean>(false);

  setProgressBarStatus(status: boolean) {
    this.progressBarStatus.next(status);
  }
}
