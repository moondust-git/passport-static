import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {IndexComponent} from './index.component';
import {Ng2BootstrapModule, TooltipModule} from 'ngx-bootstrap';
import {MdTooltipModule} from '../../modules/cpts/tooltip';

@NgModule({
  imports: [
    CommonModule,
    Ng2BootstrapModule.forRoot(),
    MdTooltipModule,
    RouterModule.forChild([
      {path: '', component: IndexComponent}
    ])
  ],
  declarations: [IndexComponent]
})
export class IndexModule {
}
