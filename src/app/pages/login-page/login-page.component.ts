import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form = this.initForm()

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  private initForm() : FormGroup {
    return this.formBuilder.group({
      email: this.formBuilder.control(''),
      password: this.formBuilder.control('')
    }) ;
  }
}
