import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {TActiveModal} from "../../../Tui/components/modal/modal-ref";
import {TConfirm} from "../../../Tui/components/confirm/confirm.service";

@Component({
  selector: 'app-route-index.row',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private confirm: TConfirm) {
  }

  ngOnInit() {
  }

  loadingAlert() {

    this.confirm.confirm({title: 'nihao', content: 'asd'}).ok(() => alert('ok'));
  }

  showNav(nav: any) {
    nav.open();
  }


  afshow() {
    console.log('afshow');
  }

  afhide() {
    console.log('afhide');
  }


  hideNav(nav: any) {
    nav.hide();
  }
}

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: TActiveModal) {
  }
}
