import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./auth.service";
import {AuthGuardService} from "./auth-guard.service";
import { IsAuthenticatedDirective } from './is-authenticated.directive';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    IsAuthenticatedDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    IsAuthenticatedDirective
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class UtilModule { }
