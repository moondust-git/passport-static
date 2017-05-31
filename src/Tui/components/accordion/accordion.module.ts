import {CommonModule} from "@angular/common";
import {ModuleWithProviders, NgModule} from "@angular/core";

import {AccordionPanelComponent} from "./accordion-group.component";
import {AccordionComponent} from "./accordion.component";
import {AccordionConfig} from "./accordion.config";
import {TCollapseModule} from "../collapse/collapse.module";

@NgModule({
  imports: [CommonModule, TCollapseModule],
  declarations: [AccordionComponent, AccordionPanelComponent],
  exports: [AccordionComponent, AccordionPanelComponent],
})
export class AccordionModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: AccordionModule, providers: [AccordionConfig]};
  }
}
