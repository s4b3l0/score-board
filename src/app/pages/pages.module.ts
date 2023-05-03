import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import {NbButtonModule, NbCardModule, NbInputModule} from "@nebular/theme";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SignUpComponent } from './sign-up/sign-up.component';
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
  declarations: [
    LoginPageComponent,
    SignUpComponent
  ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        NbCardModule,
        NbInputModule,
        NbButtonModule,
        ReactiveFormsModule,
        RouterLinkWithHref
    ]
})
export class PagesModule { }
