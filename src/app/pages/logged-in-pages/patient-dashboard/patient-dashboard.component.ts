import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DiseaseControllerService} from "../../../api/services/disease-controller.service";
import {FeedbackControllerService} from "../../../api/services/feedback-controller.service";
import {config, Observable, Subscription} from "rxjs";
import {PatientControllerService} from "../../../api/services/patient-controller.service";
import {Patient} from "../../../api/models/patient";
import {Disease} from "../../../api/models/disease";
import {Feedback} from "../../../api/models/feedback";
import {Appointment} from "../../../api/models/appointment";
import {
  AppointmentControllerService,
} from "../../../api/services/appointment-controller.service";
import {NbDialogConfig, NbDialogService} from "@nebular/theme";
import {CreateAppointmentComponent} from "../create-appointement/create-appointment.component";
import {UserAccountControllerService} from "../../../api/services/user-account-controller.service";
import {UserAccount} from "../../../api/models/user-account";
import {DiseaseFormComponent} from "../disease-form/disease-form.component";
import {SessionService} from "../../../util/session.service";
import {Mode} from "../../../share-components/item-management/item-management.component";
import {AddFeedbackComponent} from "../add-feedback/add-feedback.component";

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit, OnDestroy{
  size: 'small' | 'large' | 'medium' = 'small';
  title: string  = '';
  patients$: Observable<Array<Patient>> | undefined;
  userAccount: UserAccount | undefined;
  disease: Array<Disease> | undefined;
  feedback: Array<Feedback> | undefined;
  appointment: Array<Appointment> | undefined;
  appointment$: Observable<Appointment[]> | undefined;

  constructor(private  diseaseControllerService: DiseaseControllerService,
              private nbDialogService: NbDialogService,
              private sessionService :SessionService,
              private patientControllerService :PatientControllerService,
              private userAccountControllerService :UserAccountControllerService,
              private appointmentControllerService: AppointmentControllerService,
              private feedbackControllerService: FeedbackControllerService,) { }

  subscriptions : Subscription = new Subscription();

  @Input()
  patient : Patient | undefined;

  ngOnInit(): void {

    this.sessionService.patient.subscribe((patient) => {
      this.patient = patient;
      if (patient) {
        // this.subscriptions.add(this.patient$.subscribe(value => {
        //   if (value) {
        //     let params: GetDoctorUsingGETParams = {
        //       email: value.email || '',
        //       flag: 'P'
        //     }
        //     this.appointment$ = this.appointmentControllerService.getDoctorUsingGET(params)
        //   }
        // }));

        this.getDiseaseRows()
        let sub2 = this.feedbackControllerService.getAllUsingGET2().subscribe((value) => {
          this.feedback = value;
        });

        this.appointment$ = this.appointmentControllerService.getDoctorUsingGET({
          flag: 'x',
          email: patient.userAccount?.email || ''
        })
        this.getAppointments();
        let sub4 = this.userAccountControllerService
          .getOneUsingGET4(this.patient?.userAccount?.email || '').subscribe(value => {
          this.userAccount = value;
        });

        this.subscriptions.add(...[ sub2, sub4])
      }
    });
  }

  getFeedbackColumns() {
    return [{ prop: 'doctor' }, { name: 'name' }, { name: 'patient', sortable: false }];
  }

  getFeedbackRows() {
    return this.patient?.feedbacks;
  }

  getDiseaseRows() {
    if (this.patient) {
      this.diseaseControllerService.getByPatientEmailUsingGET(this.patient.email || '').subscribe((value) => {
        this.disease = [...value];
      });
    }
  }

  getDiseaseColumns() {
    return [{name: 'Type', prop: 'type'}, {name: 'Name', prop: 'name'}, {name: 'Actions', prop: 'name'}];
  }

  getServiceRows() {
    return undefined;
  }

  getServiceColumns() {
    return [{ name: 'Doctor' ,prop: 'doctor' },
      { name: 'Patient', prop: 'patient', sortable: false },
      {name: 'Time', prop: 'timeFrom'}];
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  config : Partial<NbDialogConfig> = {
    context: {},
    closeOnBackdropClick: false,
  }
  Mode = Mode;

  addAppointment() {
    this.config.context = {appointments : this.patient?.appointments}
    this.nbDialogService.open(CreateAppointmentComponent, this.config).onClose.subscribe((value: Appointment) =>{

      if (this.patient) {
        let start = String(value.timeFrom).indexOf(':') - 2 || 0;
        let end = String(value.timeFrom).lastIndexOf(':');
        value.timeTo = String(value.timeTo).substring(start, end);
        value.timeFrom = String(value.timeFrom).substring(start, end);
        value.patient = this.userAccount?.email;
        value.doctor = this.userAccount?.email;
        this.patient?.appointments?.push(value);
        this.appointmentControllerService.saveUsingPOST(value).subscribe(value1 => {
          console.log(value1)

          if (value1) {
            this.getAppointments()
          }
        });

      }
    });
  }

  addFeedBack() {
    this.nbDialogService.open(AddFeedbackComponent, this.config).onClose.subscribe((value: Feedback) => {
      value.patient= this.patient?.email;
      this.feedbackControllerService.saveUsingPOST2(value).subscribe(value => {
        console.log(value);
      })
    });
  }

  addDisease() {
    this.nbDialogService.open(DiseaseFormComponent, this.config).onClose.subscribe((value: Disease) => {
      value.patient = this.patient?.email;
      this.diseaseControllerService.saveUsingPOST1(value).subscribe(value1 => {
        if(value) {
          this.getDiseaseRows();
        }
      });

    });
  }

  private getAppointments() {
    if (this.appointment$) {
      let sub3 = this.appointment$.subscribe(value => {
        this.appointment = [...value];
      });
    }
  }


}
