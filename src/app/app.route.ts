/**
 * Created by tc949 on 2017/4/5.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
const routes: Routes = [
  {path:"",redirectTo:"index.html",pathMatch:"full"},
  {path:"index.html",loadChildren:"./route/index/index.module#IndexModule"},
  {path:"oauth.html",loadChildren:"./route/oauth/oauth.module#OauthModule"},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoute {
}
