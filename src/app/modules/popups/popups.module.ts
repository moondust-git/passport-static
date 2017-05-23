import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalModule} from "ngx-bootstrap";
import {PopupComponent} from "./components/popup.component";
import {PopupService} from "./services/popup.service";

@NgModule({
  imports: [
    CommonModule, ModalModule.forRoot()
  ],
  declarations: [PopupComponent],
  entryComponents: [PopupComponent],
  providers: [PopupService],
  exports: [PopupComponent]
})
export class PopupsModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: PopupsModule, providers: [PopupService]};
  }
}

