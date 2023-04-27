import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private _sessionSubject : BehaviorSubject<Object> = new BehaviorSubject<Object>({});
  constructor() {
    if (this.getSessionData()) {
      this._sessionSubject.next(JSON.parse(this.getSessionData()|| '{}'));
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


  setSession (data : Object) {
    sessionStorage.setItem("session", JSON.stringify(data))
    this.sessionSubject = data;
  }

  getSessionData() {
    return sessionStorage.getItem("session");
  }

}
