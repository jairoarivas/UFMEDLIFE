import { Component } from '@angular/core';
import { Router } from '@angular/router';

import{ AuthenticationService } from '../authentication.service';

@Component({
  selector: 'signup',
  templateUrl: 'app/authentication/signup/signup.template.html',
  styleUrls: ['app/app.styles.css']
})
export class SignupComponent {
  errorMessage: string;
  user: any = {};
  roles = ['Admin', 'Officer', 'Member'];
  private showPassword = false;

  constructor (private _authenticationService: AuthenticationService, private _router: Router) { }

  signup() {
    this._authenticationService.signup(
      this.user).subscribe(result =>
      this._router.navigate(['/']),
      error => this.errorMessage = error );
  }
}
