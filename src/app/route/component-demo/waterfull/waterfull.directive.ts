import {AfterViewInit, Directive, ElementRef, Inject, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[Twaterfull]'
})
export class WaterfullDirective implements AfterViewInit {


  private _Twaterfull: string;

  private _rowHeightArr: Array<number> = [];
  private _items: Array<ElementRef> = [];


  public registerItem(item: ElementRef) {
    this._items.push(item);
  }

  @Input()
  set Twaterfull(value: string) {
    this._Twaterfull = value;
  }

  get rowHeightArr(): Array<any> {
    return this._rowHeightArr;
  }

  public get eleRef(): ElementRef {
    return this._eleRef;
  }


  constructor(private _eleRef: ElementRef, private _render: Renderer2) {
    window.onresize = this.resize;
  }

  full() {
    let rowCount = Math.round(this.eleRef.nativeElement.offsetWidth / this._items[0].nativeElement.offsetWidth);
    if (rowCount == 0) rowCount = 1;
    for (let i = 0; i < rowCount; i++)this.rowHeightArr.push(0);
    this._render.setStyle(this.eleRef.nativeElement, 'pisotion', 'relative');
    this._items.forEach((item) => {
      this.setPostion(item);
    })
  }

  resize() {
    this.full();
  }

  ngAfterViewInit(): void {
    this.full();
  }

  setPostion(item: ElementRef) {
    this._render.setStyle(item.nativeElement, 'position', 'absolute');
    let min = this.minInRow(this.rowHeightArr, item.nativeElement.offsetHeight);
    this._render.setStyle(item.nativeElement, 'top', min.height + 'px');
    this._render.setStyle(item.nativeElement, 'left', min.index * item.nativeElement.offsetWidth + 'px');
  }

  private minInRow(rowArr: Array<number>, heightNow: number): { height: number, index: number } {
    let l = rowArr[0];
    let index = 0;
    if (l > 0) {
      for (let i = 1; i < rowArr.length; i++) {
        if (rowArr[i] < l) {
          l = rowArr[i];
          index = i;
        }
      }
    }
    rowArr[index] += heightNow;
    return {height: l, index: index};
  }
}

@Directive({
  selector: '[TwaterfullItem]'
})
export class WaterfullItemDirective implements AfterViewInit {
  @Input() TwaterfullItem: string;

  constructor(private _eleRef: ElementRef, @Inject(WaterfullDirective) private  _container: WaterfullDirective, private _render: Renderer2) {
  }

  ngAfterViewInit(): void {
    this._container.registerItem(this._eleRef);
  }


}
