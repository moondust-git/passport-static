import {NgModule, ModuleWithProviders} from '@angular/core';

import {TPopover, TPopoverCmt} from './popover';
import {TPopoverConfig} from './popover-config';

export {TPopover} from './popover';
export {TPopoverConfig} from './popover-config';

@NgModule({declarations: [TPopover, TPopoverCmt], exports: [TPopover], entryComponents: [TPopoverCmt]})
export class TPopoverModule {
  static forRoot(): ModuleWithProviders { return {ngModule: TPopoverModule, providers: [TPopoverConfig]}; }
}
