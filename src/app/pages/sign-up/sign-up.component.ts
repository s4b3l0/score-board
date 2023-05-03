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

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form : FormGroup = this.initForm();

  constructor(private  fb:FormBuilder,
              private sessionService:SessionService,
              private router: Router) { }

  ngOnInit(): void {
  }

  initForm(): FormGroup {
    let form = this.fb.group({
      username : this.fb.control("", Validators.required),
      email: this.fb.control("", Validators.required),
      password : this.fb.control( "", Validators.required),
      passwordMatch : this.fb.control("", Validators.required)
    });
    form.addValidators(this.matchValidator(this.form.get('password'), this.form.get('passwordMatch')))
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
    this.sessionService.createUser(this.form.value);

  }
}
