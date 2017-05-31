import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ComponentDemoComponent} from "./component-demo.component";
import {TSidenavModule} from "../../../Tui/components/sidenav/sidenav.module";
import {RouterModule} from "@angular/router";
import {PopoverComponent} from "./popover/popover.component";
import {TPopoverModule} from "../../../Tui/components/popover/popover.module";
import {ModalComponent} from "./modal/modal.component";
import {ConfirmComponent} from "./confirm/confirm.component";
import {TModalModule} from "../../../Tui/components/modal/modal.module";
import {TTabsModule} from "../../../Tui/components/tabs/tabs.module";
import {TabsComponent} from "./tabs/tabs.component";
import {TConfirmModule} from "../../../Tui/components/confirm/confirm.module";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {TimepickerComponent} from "./timepicker/timepicker.component";
import {FormsModule} from "@angular/forms";
import {TTimepickerModule} from "../../../Tui/components/timepicker/timepicker.module";
import {CollpaseComponent} from "./collpase/collpase.component";
import {TCollapseModule} from "../../../Tui/components/collapse/collapse.module";
import {AccordionModule} from "../../../Tui/components/accordion/accordion.module";
import {WaterfullComponent} from './waterfull/waterfull.component';
import {WaterfullDirective, WaterfullItemDirective} from './waterfull/waterfull.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TSidenavModule.forRoot(),
    TPopoverModule.forRoot(),
    TModalModule.forRoot(),
    TTabsModule.forRoot(),
    TConfirmModule.forRoot(),
    TTimepickerModule.forRoot(),
    TCollapseModule.forRoot(),
    AccordionModule.forRoot(),
    RouterModule.forChild([
      {
        path: '', component: ComponentDemoComponent,
        children: [
          {path: '', redirectTo: 'popover', pathMatch: 'full'},
          {path: 'popover', component: PopoverComponent},
          {path: 'modal', component: ModalComponent},
          {path: 'confirm', component: ConfirmComponent},
          {path: 'tabs', component: TabsComponent},
          {path: 'sidenav', component: SidenavComponent},
          {path: 'timepicker', component: TimepickerComponent},
          {path: 'collpase', component: CollpaseComponent},
          {path: 'waterfull', component: WaterfullComponent},
        ]
      }
    ])
  ],
  declarations: [ComponentDemoComponent, PopoverComponent, ModalComponent, ConfirmComponent, TabsComponent, SidenavComponent, TimepickerComponent, CollpaseComponent,
    WaterfullComponent,
    WaterfullDirective, WaterfullItemDirective]
})
export class ComponentDemoModule {
}
