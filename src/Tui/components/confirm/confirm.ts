import {AfterViewInit, Component, ElementRef, OnDestroy} from '@angular/core';
import {TActiveModal} from "../modal/modal-ref";
@Component({
  selector: 'div.modal-confim',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{title}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('close')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p [innerHtml]="content"></p>
    </div>
    <div class="modal-footer d-flex justify-content-between">
      <button type="button" class="btn btn-secondary align-self-start" (click)="activeModal.dismiss('cancel')">取消
      </button>
      <button type="button" *ngIf="isConfirm" class="btn btn-success" (click)="activeModal.close('ok')">确认</button>
    </div>
  `
})
export class ConfirmCmt implements AfterViewInit, OnDestroy {

  title: string = 'alert';

  content: string = '';

  isConfirm: boolean = false;


  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
  }

  constructor(private _elRef: ElementRef, public activeModal: TActiveModal) {
  }
}
