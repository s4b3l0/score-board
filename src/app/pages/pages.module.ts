import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './logged-in-pages/home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {NbCardModule} from "@nebular/theme";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
