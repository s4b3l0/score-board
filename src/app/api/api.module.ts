/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { UserAccountControllerService } from './services/user-account-controller.service';
import { AppointmentControllerService } from './services/appointment-controller.service';
import { AuthenticationControllerService } from './services/authentication-controller.service';
import { DiseaseControllerService } from './services/disease-controller.service';
import { FeedbackControllerService } from './services/feedback-controller.service';
import { PatientControllerService } from './services/patient-controller.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    UserAccountControllerService,
    AppointmentControllerService,
    AuthenticationControllerService,
    DiseaseControllerService,
    FeedbackControllerService,
    PatientControllerService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
