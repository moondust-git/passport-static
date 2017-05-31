import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TModal} from "../../../../Tui/components/modal/modal";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('content')
  modalContent: ElementRef;
  private closeResult: string;

  constructor(private modal: TModal) {
  }

  ngOnInit() {
  }

  showModal() {
    this.modal.open(this.modalContent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${reason}`;
    });
  }


}
