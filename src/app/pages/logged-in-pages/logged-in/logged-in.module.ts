import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedInRoutingModule } from './logged-in-routing.module';
import {HomeComponent} from "../home/home.component";
import {NbCardModule, NbIconModule} from "@nebular/theme";
import {PagesModule} from "../../pages.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LoggedInRoutingModule,
    NbIconModule,
    NbCardModule,
    PagesModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoggedInModule { }
