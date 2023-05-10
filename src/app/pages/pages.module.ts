import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import {NbButtonModule, NbCardModule, NbIconModule, NbInputModule} from "@nebular/theme";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SignUpComponent } from './sign-up/sign-up.component';
import {RouterLinkWithHref} from "@angular/router";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { CreateAppointmentComponent } from './sign-up/create-appointment/create-appointment.component';

@NgModule({
    declarations: [
        LoginPageComponent,
        SignUpComponent,
        CreateAppointmentComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        NbCardModule,
        NbInputModule,
        NbButtonModule,
        ReactiveFormsModule,
        RouterLinkWithHref,
        NbIconModule,
        NgxDatatableModule
    ]
})
export class PagesModule { }
