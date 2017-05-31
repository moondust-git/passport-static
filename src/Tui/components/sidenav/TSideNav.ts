import {
  AfterContentInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output,
  Renderer2, ViewChild,
  ViewEncapsulation
} from "@angular/core";
import {ESCAPE} from "../../util/keycodes";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {SideNavCallback} from "./callback";
/**
 * Created by tc949 on 2017/5/26.
 */

@Component({
  moduleId: module.id,
  selector: 'Tsidenav',
  // TODO(mmalerba): move template to separate file.
  templateUrl: './sidenav.html',
  host: {
    '(keyup.esc)': 'hide()',
    'tabIndex': '-1'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TSidenav implements AfterContentInit, OnDestroy, OnInit {
  @Input()
  width: number;  //宽度，如果是top和bottom位置时，为高度

  @Input()
  fade: boolean = true; //是否有阴影
  @Input()
  fadeClose: boolean = true;  //点击阴影关闭功能

  @Input()
  placement: 'left' | 'right' | 'top' | 'bottom' = 'left'; //sidenav'的位置

  @ViewChild("sidenav")
  private _sidenav: ElementRef;

  @ViewChild("shadow")
  private _shadow: ElementRef;

  private _active = false;


  get active(): boolean {
    return this._active;
  }

  @Input('active')
  set active(value: boolean) {
    this._active = value;
  }

  @Output('afterOpen') onOpen = new EventEmitter<void>(); //打开回掉
  @Output('afterHide') onHide = new EventEmitter<void>(); //关闭回掉


  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
  }

  ngOnInit(): void {
    if (this.width > 0) {
      if (this.placement === 'left' || this.placement === 'right')
        this._renderer.setStyle(this._sidenav.nativeElement, 'width', this.width + 'px');
      else
        this._renderer.setStyle(this._sidenav.nativeElement, 'height', this.width + 'px');
    }
    this._renderer.addClass(this._sidenav.nativeElement, this.placement);
  }

  open(): void {
    if (!this._active) {
      this._renderer.addClass(this._sidenav.nativeElement, 'open');
      if (this.fade) {
        this._renderer.addClass(this._shadow.nativeElement, 'open');
      }
      this._renderer.addClass(this._elementRef.nativeElement.parentElement, 'sidenav-open');
      this._sidenav.nativeElement.blur();
      this._onTransitionEnd();
    }
  }

  toggle() {
    if (this._active) {
      this.hide()
    } else {
      this.open();
    }
  }

  hide(): void {
    if (this._active) {
      this._renderer.removeClass(this._sidenav.nativeElement, 'open');
      this._renderer.removeClass(this._shadow.nativeElement, 'open');
      this._onTransitionEnd();
    }
  }

  private fadeClick() {
    if (this.fadeClose) {
      this.hide();
    }
  }

  private _onTransitionEnd() {
    if (this._active) {
      this.onHide.emit();
    } else if (!this._active) {
      this.onOpen.emit();
    }
    this._active = !this._active;
  }


  ngOnDestroy(): void {
  }

  ngAfterContentInit(): void {
  }

  private containerMove(width: number) {
  }
}


export class MdSidenavToggleResult {
  constructor(public type: 'open' | 'close', public animationFinished: boolean) {
  }
}
