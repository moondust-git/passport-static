import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {IndexComponent} from "./index.component";
import {FormsModule} from "@angular/forms";
import {TModalModule} from "../../../Tui/components/modal/modal.module";
import {TConfirmModule} from "../../../Tui/components/confirm/confirm.module";
import {TTimepickerModule} from "../../../Tui/components/timepicker/timepicker.module";
import {TPopoverModule} from "../../../Tui/components/popover/popover.module";
import {TSidenavModule} from "../../../Tui/components/sidenav/sidenav.module";
import {TProgressbarModule} from "../../../Tui/components/progressbar/progressbar.module";
import {TCollapseModule} from "../../../Tui/components/collapse/collapse.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TModalModule.forRoot(),
    TConfirmModule.forRoot(),
    TTimepickerModule.forRoot(),
    TProgressbarModule.forRoot(),
    TPopoverModule.forRoot(),
    TSidenavModule.forRoot(),
    TCollapseModule.forRoot(),
    RouterModule.forChild([
      {path: '', component: IndexComponent}
    ])
  ],
  declarations: [IndexComponent],
  providers: [],
  entryComponents: []
})
export class IndexModule {
}
