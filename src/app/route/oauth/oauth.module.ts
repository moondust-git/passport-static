import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {OauthComponent} from "./oauth.component";
import {OauthService} from "./provider/oauth.service";
import {FormsModule} from "@angular/forms";
import {AlertModule} from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlertModule.forRoot(),
    RouterModule.forChild([
      {
        path: "",
        component: OauthComponent
      }
    ])
  ],
  declarations: [OauthComponent],
  providers: [OauthService]
})
export class OauthModule {
}
