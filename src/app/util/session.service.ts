import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthDetails} from "../model/auth-details";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private _sessionSubject : BehaviorSubject<Object> = new BehaviorSubject<Object>({});
  private url = environment.eHealthAuthUrl

  constructor(private httpClient: HttpClient,
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
    this.httpClient.post(`${this.url}/auth/login`, data).subscribe((value: AuthDetails) => {
      console.log(value);
      if (!value) return;
      sessionStorage.setItem("username", value.username || '');
      sessionStorage.setItem("email", data.email || '');
      sessionStorage.setItem("auth", JSON.stringify(value.permissions));
      this.sessionSubject = data;
    });
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
