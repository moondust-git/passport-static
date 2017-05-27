import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoute} from './app.route';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TSidenavModule} from "../Tui/components/sidenav/sidenav.module";
import {TTimepickerModule} from "../Tui/components/timepicker/timepicker.module";
import { ComponentDemoComponent } from './route/component-demo/component-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    TSidenavModule.forRoot(),
    TTimepickerModule.forRoot(),
    AppRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
