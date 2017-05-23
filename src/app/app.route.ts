import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
/**
 * Created by Tristan on 17/5/19.
 */

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {path: '', loadChildren: './route/oauth/oauth.module#OauthModule'}
      ]
    )
  ],
  exports: [RouterModule]
})
export class AppRoute {

}
