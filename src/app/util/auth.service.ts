import { Injectable } from '@angular/core';
import {SessionService} from "./session.service";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private sessionService :SessionService, private router:Router) {
    this.isAuthenticated()
  }

  isLoggedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  isAuthenticated() {
    this.sessionService.sessionSubject.subscribe(value => {
      if (value.hasOwnProperty('email')) {
       this.isLoggedIn.next(true);
        this.router.navigate(['home']).then();
      } else {
        this.isLoggedIn.next(false);
        this.router.navigate(['login']).then();
      }
    });
  }
}
