import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from "@nebular/theme";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Appointment} from "../../../api/models/appointment";
import {SessionService} from "../../../util/session.service";

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  form: FormGroup = this.buildGroup();
  minimum : Date = new Date();

  constructor(private dialogRef: NbDialogRef<CreateAppointmentComponent>,
              private sessionService: SessionService,
              private formBuilder :FormBuilder) {
    this.minimum.setDate(Date.now());
  }

  ngOnInit(): void {
  }
/*
  doctor?: UserAccount;
  effFrom?: ZonedDateTime;
  effTo?: ZonedDateTime;
  id?: number;
  patient?: UserAccount;
 */

  private buildGroup() {
    let date = new Date().getDate();
    let m : Appointment
    return this.formBuilder.group({
      date: this.formBuilder.control(new Date(), Validators.required),
      timeFrom: this.formBuilder.control(new Date(), Validators.required),
      timeTo: this.formBuilder.control(new Date(), Validators.required),
    });
  }

  addDate() {
    let appointment: Appointment;
    appointment = {timeFrom: this.form.value.timeFrom, timeTo: this.form.value.timeTo, day: this.form.value.date};
    this.dialogRef.close(appointment);
  }

  // @ts-ignore
  getControl(name: string) : FormControl {
    let control  =  this.form.get(name);
    if (control) {
      return control as FormControl;
    }
  }
}
