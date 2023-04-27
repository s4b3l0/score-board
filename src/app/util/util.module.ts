import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./auth.service";
import {AuthGuardService} from "./auth-guard.service";
import { IsAuthenticatedDirective } from './is-authenticated.directive';

@NgModule({
  declarations: [
    IsAuthenticatedDirective
  ],
  imports: [
    CommonModule
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
