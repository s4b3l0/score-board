import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators, ɵFormGroupRawValue,
  ɵGetProperty,
  ɵTypedOrUntyped
} from "@angular/forms";
import {SessionService} from "../../util/session.service";
import {Router} from "@angular/router";
import {Patient} from "../../api/models/patient";
import {PatientControllerService} from "../../api/services/patient-controller.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form : FormGroup = this.initForm();

  constructor(private  fb:FormBuilder,
              private router :Router,
              private patientControllerService: PatientControllerService) { }

  ngOnInit(): void {
  }

  initForm(): FormGroup {
    let form = this.fb.group({
      username : this.fb.control("", Validators.required),
      email: this.fb.control("", Validators.required),
      password : this.fb.control( "", Validators.required),
      passwordMatch : this.fb.control("", Validators.required)
    });
    form.addValidators(this.matchValidator(form.get('password'), form.get('passwordMatch')))
    return form;
  }

  matchValidator(
    control: AbstractControl<ɵGetProperty<ɵTypedOrUntyped<any, ɵFormGroupRawValue<any>, any>, "password">> | null,
    controlTwo: AbstractControl<ɵGetProperty<ɵTypedOrUntyped<any, ɵFormGroupRawValue<any>, any>, "passwordMatch">> | null
  ): ValidatorFn {
    return () => {
      if (control?.value !== controlTwo?.value)
        return { match_error: 'Passwords do not match' };
      return null;
    };
  }

  submit() {
    const patient : Patient = {
      email: this.form.value.email,
      userAccount : {
        email: this.form.value.email,
        userName: this.form.value.username,
        accountType: "PATIENT"
      }
    }
    this.patientControllerService.createUserUsingPOST({patient: patient, password: this.form.value.password}).subscribe(value => {
      console.log(value);
      if (value) {
        this.form.reset();
        this.router.navigate(['/login']);
      }
    });

  }
}
