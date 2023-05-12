import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {AuthenticationControllerService} from "../api/services/authentication-controller.service";
import {AuthDetails} from "../api/models/auth-details";
import {UserAccount} from "../api/models/user-account";
import {Patient} from "../api/models/patient";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private _sessionSubject : BehaviorSubject<Object> = new BehaviorSubject<Object>({});
  patient : BehaviorSubject<Patient | undefined> = new BehaviorSubject<Patient| undefined>(undefined);
  private url = environment.eHealthAuthUrl

  constructor(private httpClient: HttpClient,
              private authenticationControllerService:AuthenticationControllerService,
              private router:Router) {
    if (this.getSessionData()) {
      let session = JSON.stringify({email : this.getSessionData()});
      this._sessionSubject.next(JSON.parse(session || '{}'));
    }


  }



  get sessionSubject(): BehaviorSubject<Object>  {
    return this._sessionSubject;
  }

  set sessionSubject(value: Object) {
    if (value) {
      this._sessionSubject.next(value)
    }
  }

  setSession (data: AuthDetails) {
    let authDetails:AuthDetails = {
      email: data.email,
      password: data.password
    }
    this.authenticationControllerService.loginUsingPOST(authDetails).subscribe(value => {
      console.log(value);
      if (!value) return;
      sessionStorage.setItem("username", value.username || '');
      sessionStorage.setItem("email", value.email || '');
      sessionStorage.setItem("accountType", value.accountType?.toString() || 'PATIENT')
      sessionStorage.setItem("auth", JSON.stringify(value.permissions));
      this.sessionSubject = data;
    });
  }

  public getAccount() : UserAccount {
    return {
      userName: sessionStorage.getItem('username') || '',
      email: sessionStorage.getItem('email') || '',
    }
  }

  getType(){
    return sessionStorage.getItem("accountType");
  }

  getSessionData() {
    return sessionStorage.getItem("email");
  }

  sessionDestroy() {
    sessionStorage.clear();
  }

  createUser(data: AuthDetails | any) {
    this.httpClient.post(`${this.url}/auth/create`, data).subscribe(value => {
      console.log(value);
      this.router.navigate(['/login']).then();
    });
  }

}
