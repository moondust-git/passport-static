import {
  Component,
  Output,
  EventEmitter,
  Input,
  ElementRef,
  Renderer2,
  OnInit,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import {ModalDismissReasons} from './modal-dismiss-reasons';

@Component({
  selector: 'div.moondust-modal-window',
  host: {
    '[class]': '"modal fade" + (windowClass ? " " + windowClass : "")',
    'role': 'dialog',
    'tabindex': '-1',
    '(keyup.esc)': 'escKey($event)',
    '(click)': 'backdropClick($event)'
  },
  template: `
    <div [class]="'modal-dialog' + (size ? ' modal-' + size : '')" role="document">
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class NgbModalWindow implements OnInit,
  AfterViewInit, OnDestroy {
  private _elWithFocus: Element;  // element that is focused prior to modal opening

  @Input() backdrop: boolean | string = true;
  @Input() keyboard = true;
  @Input() size: string;
  @Input() windowClass: string;

  @Output('dismiss') dismissEvent = new EventEmitter();

  constructor(private _elRef: ElementRef, private _renderer: Renderer2) {
  }

  backdropClick($event): void {
    if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
      this.dismiss(ModalDismissReasons.BACKDROP_CLICK);
    }
  }

  escKey($event): void {
    if (this.keyboard && !$event.defaultPrevented) {
      this.dismiss(ModalDismissReasons.ESC);
    }
  }

  dismiss(reason): void {
    console.log('dasd');

    this.dismissEvent.emit(reason);
  }

  ngOnInit() {
    this._elWithFocus = document.activeElement;
    this._renderer.addClass(document.body, 'modal-open');
  }

  ngAfterViewInit() {
    if (!this._elRef.nativeElement.contains(document.activeElement)) {
      this._renderer.addClass(this._elRef.nativeElement, 'show');
      this._renderer.addClass(this._elRef.nativeElement, 'in');
      this._renderer.setStyle(this._elRef.nativeElement, 'display', 'block');
      this._renderer.setProperty(this._elRef.nativeElement, 'scrollTop', 0);
      this._renderer.setAttribute(this._elRef.nativeElement, 'aria-hidden', 'false');
      this._elRef.nativeElement['focus'].apply(this._elRef.nativeElement, []);
    }
  }

  ngOnDestroy() {
    this._renderer.removeClass(this._elRef.nativeElement, 'in');
    this._renderer.removeClass(this._elRef.nativeElement, 'show');
    this._elRef.nativeElement.remove();
    if (this._elWithFocus && document.body.contains(this._elWithFocus)) {
      this._elWithFocus['focus'].apply(this._elWithFocus, []);
    } else {
      document.body['focus'].apply(document.body, []);
    }
    this._elWithFocus = null;
    this._renderer.removeClass(document.body, 'modal-open');
  }
}
