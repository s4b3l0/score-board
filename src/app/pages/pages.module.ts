import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import {NbCardModule, NbInputModule} from "@nebular/theme";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    NbCardModule,
    NbInputModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
