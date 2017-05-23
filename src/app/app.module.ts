import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {AppRoute} from "./app.route";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Ng2BootstrapModule} from "ngx-bootstrap";
import {LoadingModule} from "./modules/loading/loading.module";
import {PopupsModule} from "./modules/popups/popups.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoadingModule.forRoot(),
    PopupsModule.forRoot(),
    AppRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
