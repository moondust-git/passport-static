import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {CallBack} from "../callback/callback";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Injectable()
export class LoadingService {
  private loadingSource = new Subject<any>();
  loading$ = this.loadingSource.asObservable();
  loadingCallback: CallBack;

  private closeSource = new Subject<any>();
  close$ = this.closeSource.asObservable();
  closeCallback: CallBack;


  private changeSource = new Subject<any>();
  change$ = this.changeSource.asObservable();


  constructor() {
  }

  show(innerHtml?: string, time?: number) {
    let value = {
      innerHtml: innerHtml,
      time: time
  }
    this.loadingSource.next(value);
    if (time) {
      this.closeCallback = new CallBack
      return this.closeCallback;
    } else {
      this.loadingCallback = new CallBack();
      return this.loadingCallback;
    }
  }

  close() {
    this.closeSource.next();
    this.closeCallback = new CallBack();
    return this.closeCallback;
  }

  text(innerHtml: string) {
    this.changeSource.next(innerHtml);
  }
}
