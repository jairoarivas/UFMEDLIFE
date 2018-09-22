import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'forgotPassword',
  templateUrl: './app/authentication/forgotPassword/forgotPassword.template.html',
  styleUrls: ['app/app.styles.css']

})
export class ForgotPasswordComponent {
  errorMessage: string;
  credentials: any = {};

  constructor (private _authenticationService: AuthenticationService, private _router: Router) {  }

  // forgotPassword() {
  //   this._authenticationService.forgotPassword(
  //     this.credentials).subscribe(result =>
  //     this._router.navigate(['/itSent']),
  //     error => this.errorMessage = error );
  // }
}
