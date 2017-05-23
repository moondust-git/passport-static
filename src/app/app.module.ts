import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
// / Import the Animations module
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoute} from "./app.route";
import {OauthService} from "./provider/oauth.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoute,
    BrowserAnimationsModule
  ],
  providers: [OauthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
