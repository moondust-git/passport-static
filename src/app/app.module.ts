import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoute} from './app.route';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {LoadingModule} from './modules/cpts/loading/loading.module';
import {PopupsModule} from './modules/cpts/popups/popups.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
