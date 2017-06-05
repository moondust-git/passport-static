import {Component, OnInit} from '@angular/core';
import {TConfirm} from "../../../../Tui/components/confirm/confirm.service";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private confim: TConfirm) {
  }

  ngOnInit() {

  }
  confirmShow() {
    this.confim.confirm({title: '警告', content: '是否删除'}).ok(() => {
      alert('ok');
    }).cancel(() => {
      alert('cancel');
    });
  }
  alertShow() {
    this.confim.alert({title: '消息', content: '你好'}).ok(() => {
      alert('ok');
    });
  }
}
