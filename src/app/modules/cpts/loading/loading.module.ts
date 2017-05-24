import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingComponent} from './loading.component';
import {LoadingService} from './provider/loading.service';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule, ModalModule.forRoot()
  ],
  exports: [LoadingComponent],
  declarations: [LoadingComponent],
  providers: [LoadingService],
  entryComponents: [LoadingComponent]
})
export class LoadingModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: LoadingModule, providers: [LoadingService]};
  }
}
