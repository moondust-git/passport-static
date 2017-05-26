import {AfterViewInit, Component, ElementRef, OnDestroy} from '@angular/core';

@Component({
  selector: 'div.modal-backdrop',
  template: '',
  host: {'class': 'modal-backdrop fade'}
})
export class NgbModalBackdrop implements AfterViewInit, OnDestroy {
  ngOnDestroy(): void {
    console.log('backdrop_destory');
    const backdropNativeEl = this._elRef.nativeElement.remove();
  }

  ngAfterViewInit(): void {

  }

  constructor(private _elRef: ElementRef) {
  }
}
