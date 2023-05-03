import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../util/session.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form : FormGroup = this.initForm();

  constructor(private  fb:FormBuilder,
              private sessionService:SessionService) { }

  ngOnInit(): void {
  }

  initForm(): FormGroup {
    return this.fb.group({
      username : this.fb.control("", Validators.required),
      email: this.fb.control("", Validators.required),
      password : this.fb.control( "", Validators.required),
      passwordMatch : this.fb.control("", Validators.required)
    });
  }

  submit() {
    this.sessionService.createUser(this.form.value)
  }
}
