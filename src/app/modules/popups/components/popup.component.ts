import {Component, ViewChild} from "@angular/core";
import {PopupService} from "../services/popup.service";
import {ModalDirective} from "ngx-bootstrap";

@Component({
  selector: 'md-popup',
  templateUrl: './popup.component.html'
})
export class PopupComponent {
  @ViewChild('modal') public modal: ModalDirective;
  message: any = {};
  subscribedToClosing: boolean = false;
  isConfirm: boolean = false;
  confirmed: boolean = false;
  title = '提示';
  okText = '确定';
  cancelText = "取消";
  messageText = "";

  constructor(private popupService: PopupService) {
    popupService.alert$.subscribe((message: any) => {
      this.isConfirm = false;
      this.message = message;
      this.modal.show();
      this.handleClose();
    });
    popupService.confirm$.subscribe((message: any) => {
      this.isConfirm = true;
      this.message = message;
      this.modal.show();
      this.handleClose();
    });
  }

  handleClose() {
    if (!this.subscribedToClosing) {
      this.modal.onHidden.subscribe(() => {
        this.subscribedToClosing = true;
        if (this.isConfirm) {
          if (this.confirmed) {
            this.popupService.confirmCallback._ok();
          } else {
            this.popupService.confirmCallback._cancel();
            this.confirmed = false;
          }
        } else {
          this.popupService.alertCallback._ok();
        }
      });
    }
  }

  ok(): void {
    this.confirmed = true;
    this.modal.hide();
  }

  cancel(): void {
    this.confirmed = false;
    this.modal.hide();
  }
}
