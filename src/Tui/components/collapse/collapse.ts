import {Component, Input, ViewEncapsulation} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";
@Component({
  moduleId: module.id,
  selector: 'TCollapse',
  template: `
    <div class="t-collapse-body" [@slide]="slide()" style="overflow: hidden">
      <ng-content></ng-content>
    </div>
  `,
  animations: [
    trigger('slide', [
      state('up', style({height: 0})),
      state('down', style({height: '*'})),
      transition('down => up', [
        style({height: '*'}),
        animate(200, style({
          height: 0
        }))
      ]),
      transition('up => down', [
        style({height: 0}),
        animate(200, style({
          height: '*'
        }))
      ])
    ])
  ],
  host: {
    'role': 'accordion-tab',
    'style': 'overflow:hidden'
  },
  encapsulation: ViewEncapsulation.None,
  exportAs: 'TCollapse'
})
export class TCollapse {

  private _active: boolean = false;

  @Input()
  get active(): boolean {
    return this._active;
  }

  set active(value) {
    this._active = value;
  }

  slide(): string {
    return this.active ? 'down' : 'up';
  }

  constructor() {
  }

  show() {
    this.active = true;
  }

  hide() {
    this.active = false;
  }


  toggle() {
    this.active = !this.active;
  }

  /**
   * Find index of specific tab of accordion
   * @return index number of this tab
   */
  findTabIndex() {
    let index = -1;
    return index;
  }
}
