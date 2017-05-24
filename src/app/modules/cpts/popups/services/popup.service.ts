import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {AlertCallback} from '../alert-callback';
import {ConfirmCallback} from '../confirm-callback';

@Injectable()
export class PopupService {
  private alertSource = new Subject<any>();
  alert$ = this.alertSource.asObservable();
  alertCallback: AlertCallback;

  private confirmSource = new Subject<any>();
  confirm$ = this.confirmSource.asObservable();
  confirmCallback: ConfirmCallback;


  confirm(message: any): ConfirmCallback {
    if ((typeof message === 'string') && message.constructor === String) {
      message = {message: message};
    }
    this.confirmSource.next(message);
    this.confirmCallback = new ConfirmCallback();
    return this.confirmCallback;
  }

  alert(message: any): AlertCallback {
    if ((typeof message === 'string') && message.constructor === String) {
      message = {message: message};
    }
    this.alertSource.next(message);
    this.alertCallback = new AlertCallback();
    return this.alertCallback;
  }
}
