import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {HomeComponent} from "./pages/logged-in-pages/home/home.component";
import {AuthGuardService} from "./util/utils";
import {UtilModule} from "./util/util.module";

const routes: Routes = [

  {
    path:'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UtilModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
