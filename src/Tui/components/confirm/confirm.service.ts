import {Injectable} from "@angular/core";
import {TModal, TModalOptions} from "../modal/modal";
import {ConfirmCmt} from "./confirm";
import {ConfirmCallback} from "./callback";

@Injectable()
export class TConfirm {
  private _callback: ConfirmCallback;

  private config: TModalOptions;

  constructor(private modal: TModal) {
    this.config = {backdrop: false, container: 'body', keyboard: false, size: 'sm'};
  }

  confirm(opt: any): ConfirmCallback {
    this._callback = new ConfirmCallback();
    const confirmRef = this.modal.open(ConfirmCmt, this.config);
    confirmRef.componentInstance.isConfirm = true;
    Object.assign(confirmRef.componentInstance, opt);
    confirmRef.result.then((result) => {
      this.callback(result);
    }, (reason) => {
      this.callback(reason);
    });
    return this._callback;
  }

  alert(opt: any) {
    this._callback = new ConfirmCallback();
    const confirmRef = this.modal.open(ConfirmCmt, this.config);
    confirmRef.componentInstance.isConfirm = false;
    Object.assign(confirmRef.componentInstance, opt);
    confirmRef.result.then((result) => {
      this.callback(result);
    }, (reason) => {
      this.callback(reason);
    });
    return this._callback;
  }

  callback(result: any) {
    if (result === 'ok') {
      this._callback._ok();
    } else if (result === 'cancel') {
      this._callback._cancel();
    }
  }
}
