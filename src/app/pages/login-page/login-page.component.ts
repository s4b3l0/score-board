import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {SessionService} from "../../util/session.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form = this.initForm()

  constructor(private formBuilder: FormBuilder,
              private sessionService:SessionService) { }

  ngOnInit(): void {
  }

  private initForm() : FormGroup {
    return this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.email, Validators.required]),
      password: this.formBuilder.control('', [Validators.required])
    }) ;
  }

  submit() {
    this.sessionService.setSession(this.form.value);
  }
}
