import { Component } from '@angular/core';
import {AuthGuardService} from "./util/auth-guard.service";
import {AuthService} from "./util/auth.service";
import {SessionService} from "./util/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-health-fe';


  constructor(private authService: AuthService,
              private router: Router,
              private sessionService: SessionService) {
  }

  logout() {
    this.sessionService.sessionDestroy();
    this.authService.isLoggedIn.next(false);
    this.router.navigate(['login']).then();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
