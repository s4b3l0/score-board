import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setSession (data : unknown) {
    sessionStorage.setItem("session", JSON.stringify(data))
  }
}
