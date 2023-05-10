import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedInRoutingModule } from './logged-in/logged-in-routing.module';
import {HomeComponent} from "./home/home.component";
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule, NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbTimepickerModule
} from "@nebular/theme";
import {PagesModule} from "../pages.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateAppointmentComponent} from "./create-appointement/create-appointment.component";
import {PatientDashboardComponent} from "./patient-dashboard/patient-dashboard.component";
import {ViewAvailableServiceComponent} from "./view-available-service/view-available-service.component";
import {ViewAvailableDeseaseComponent} from "./view-available-desease/view-available-desease.component";
import {ShareComponentsModule} from "../../share-components/share-components.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { DiseaseFormComponent } from './disease-form/disease-form.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';

@NgModule({
  declarations: [HomeComponent,
    CreateAppointmentComponent,
    PatientDashboardComponent,
    ViewAvailableServiceComponent,
    ViewAvailableDeseaseComponent,
    DiseaseFormComponent,
    AddFeedbackComponent,
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
    FormsModule,
    NbAccordionModule,
    NgxDatatableModule,
    NbDatepickerModule,
    NbTimepickerModule,
  ],
  exports: [
    PatientDashboardComponent
  ]
})
export class LoggedInModule { }
