import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedInRoutingModule } from './logged-in/logged-in-routing.module';
import {HomeComponent} from "./home/home.component";
import {NbButtonModule, NbCardModule, NbIconModule, NbInputModule} from "@nebular/theme";
import {PagesModule} from "../pages.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateAppointementComponent} from "./create-appointement/create-appointement.component";
import {PatientDashboardComponent} from "./patient-dashboard/patient-dashboard.component";
import {ViewAvailableServiceComponent} from "./view-available-service/view-available-service.component";
import {ViewAvailableDeseaseComponent} from "./view-available-desease/view-available-desease.component";
import {ShareComponentsModule} from "../../share-components/share-components.module";

@NgModule({
  declarations: [HomeComponent,
    CreateAppointementComponent,
    PatientDashboardComponent,
    CreateAppointementComponent,
    ViewAvailableServiceComponent,
    ViewAvailableDeseaseComponent,
  ],
  imports: [
    CommonModule,
    NbIconModule,
    ShareComponentsModule,
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    PagesModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PatientDashboardComponent
  ]
})
export class LoggedInModule { }
