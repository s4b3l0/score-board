import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import {NbButtonModule, NbCardModule, NbIconModule, NbInputModule} from "@nebular/theme";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SignUpComponent } from './sign-up/sign-up.component';
import {RouterLinkWithHref} from "@angular/router";
import { CreateAppointementComponent } from './logged-in-pages/create-appointement/create-appointement.component';
import { ViewAvailableServiceComponent } from './logged-in-pages/view-available-service/view-available-service.component';
import { ViewAvailableDeseaseComponent } from './logged-in-pages/view-available-desease/view-available-desease.component';
import { PatientDashboardComponent } from './logged-in-pages/patient-dashboard/patient-dashboard.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [
    LoginPageComponent,
    SignUpComponent,
    CreateAppointementComponent,
    ViewAvailableServiceComponent,
    ViewAvailableDeseaseComponent,
    PatientDashboardComponent
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
