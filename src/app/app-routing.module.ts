import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {HomeComponent} from "./pages/logged-in-pages/home/home.component";
import {AuthGuardService} from "./util/utils";
import {UtilModule} from "./util/util.module";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginPageComponent,
    pathMatch: "full"
  },
  {
    path: 'login/signup',
    component: SignUpComponent,
    pathMatch: "full"
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), UtilModule],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
