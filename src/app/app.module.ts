import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {AppRoute} from "./app.route";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TSidenavModule} from "../Tui/components/sidenav/sidenav.module";
import {TTimepickerModule} from "../Tui/components/timepicker/timepicker.module";
import {TCollapseModule} from "../Tui/components/collapse/collapse.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    TSidenavModule.forRoot(),
    TCollapseModule.forRoot(),
    AppRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
