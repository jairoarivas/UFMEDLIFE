import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'viewProfile',
  templateUrl: 'app/viewProfile/viewProfile.template.html',
  styleUrls: ['app/app.styles.css']
})
export class ViewProfileComponent {
  user: any;

  constructor(private _authenticationService: AuthenticationService) {
    this.user = _authenticationService.user;
  }
}
