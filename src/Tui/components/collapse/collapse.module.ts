import {NgModule, ModuleWithProviders} from '@angular/core';
import {TCollapse} from './collapse';


@NgModule({declarations: [TCollapse], entryComponents: [TCollapse], exports: [TCollapse]})
export class TCollapseModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: TCollapseModule, providers: []};
  }
}
