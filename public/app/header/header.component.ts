import { Component, NgZone } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'header',
  templateUrl: './app/header/header.template.html',
  styleUrls: ['app/app.styles.css']
})
export class HeaderComponent {
  user:any;
  //injecting authenticationService into header component. This allows the access to user information.
	constructor(private _authenticationService: AuthenticationService) {
  this.user = _authenticationService.user;
  }
}
