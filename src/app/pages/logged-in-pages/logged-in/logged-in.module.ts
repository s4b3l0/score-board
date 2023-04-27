import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedInRoutingModule } from './logged-in-routing.module';
import {HomeComponent} from "../home/home.component";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LoggedInRoutingModule
  ]
})
export class LoggedInModule { }
