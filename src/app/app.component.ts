import { Component } from '@angular/core';
import {AuthGuardService} from "./util/auth-guard.service";
import {AuthService} from "./util/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-health-fe';


  constructor(private authService: AuthService) {
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
