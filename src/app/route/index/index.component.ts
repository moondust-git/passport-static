import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {TActiveModal} from "../../../Tui/components/modal/modal-ref";
import {TConfirm} from "../../../Tui/components/confirm/confirm.service";
import {TModal} from "../../../Tui/components/modal/modal";

@Component({
  selector: 'app-route-index.row',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private confirm: TConfirm, private modal: TModal) {
  }

  ngOnInit() {
  }

  loadingAlert() {
    this.confirm.confirm({title: 'nihao', content: 'asd'}).ok(() => alert('ok'));
  }

  showModal(c: any) {
    this.modal.open(c);
  }

  alertShow: boolean = false;

  changeAlertShow() {
    this.alertShow = !this.alertShow;
  }
}
