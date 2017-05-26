import {NgModule, ModuleWithProviders} from '@angular/core';
import {TConfirm} from "./confirm.service";
import {ConfirmCmt} from "./confirm";
import {TModalModule} from "../modal/modal.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [ConfirmCmt],
  entryComponents: [ConfirmCmt],
  imports: [TModalModule.forRoot(), CommonModule],
  providers: []
})
export class TConfirmModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: TConfirmModule, providers: [TConfirm]};
  }
}
