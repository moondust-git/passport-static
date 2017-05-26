import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {IndexComponent, NgbdModalContent} from "./index.component";
import {FormsModule} from "@angular/forms";
import {TModalModule} from "../../../Tui/components/modal/modal.module";
import {TConfirmModule} from "../../../Tui/components/confirm/confirm.module";
import {TTimepickerModule} from "../../../Tui/components/timepicker/timepicker.module";
import {TPopoverModule} from "../../../Tui/components/popover/popover.module";
import {TSidenav} from "../../../Tui/components/sidenav/TSideNav";
import {TSidenavModule} from "../../../Tui/components/sidenav/sidenav.module";

@NgModule({
  imports: [
    CommonModule,
    TModalModule.forRoot(),
    FormsModule,
    TConfirmModule.forRoot(),
    TTimepickerModule.forRoot(),
    TPopoverModule.forRoot(),
    TSidenavModule.forRoot(),
    RouterModule.forChild([
      {path: '', component: IndexComponent}
    ])
  ],
  declarations: [IndexComponent, NgbdModalContent],
  providers: [],
  entryComponents: [NgbdModalContent]
})
export class IndexModule {
}
