import {
  Component, HostBinding, Inject, Input, OnDestroy, OnInit
} from '@angular/core';
import {AccordionComponent} from './accordion.component';

/*
 * ### Accordion heading

 Instead of using `heading` attribute on the `accordion-group`, you can use an `accordion-heading` attribute on `any` element inside of a group that will be used as group's header template.

 * */

@Component({
  selector: 'accordion-group, accordion-panel',
  template: `
    <div class="card-header" (click)="toggleOpen($event)">
      <div *ngIf="heading" [ngClass]="{'text-muted': isDisabled}">{{heading}}</div>
      <ng-content select="[accordion-heading]"></ng-content>
    </div>
    <TCollapse [active]="isOpen">
      <div class="panel-body card-block" role="tabpanel">
        <ng-content></ng-content>
      </div>
    </TCollapse>
  `,

})
export class AccordionPanelComponent implements OnInit, OnDestroy {
  /** Clickable text in accordion's group header, check `accordion heading` below for using html in header */
  @Input() public heading: string;
  /** if <code>true</code> — disables accordion group */
  @Input() public isDisabled: boolean;

  // Questionable, maybe .panel-open should be on child div.panel element?
  /** Is accordion group open or closed */
  @HostBinding('class.panel-open')
  @Input()
  public get isOpen(): boolean {
    return this._isOpen;
  }

  public set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOtherPanels(this);
    }
  }

  protected _isOpen: boolean;
  protected accordion: AccordionComponent;

  public constructor(@Inject(AccordionComponent) accordion: AccordionComponent) {
    this.accordion = accordion;
  }

  public ngOnInit(): any {
    this.accordion.addGroup(this);
  }

  public ngOnDestroy(): any {
    this.accordion.removeGroup(this);
  }

  public toggleOpen(event: Event): any {
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen;
    }
  }
}
