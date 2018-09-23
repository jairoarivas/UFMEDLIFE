import { Component } from '@angular/core';
import { Router } from '@angular/router';

import{ AuthenticationService } from '../authentication.service';

@Component({
  selector: 'SignIn',
  templateUrl: 'app/authentication/signin/signin.template.html',
  styleUrls: ['app/app.styles.css']
})
export class SigninComponent {
  errorMessage: string;
  credentials: any = {};
  g: HTMLElement;

  constructor (private _authenticationService: AuthenticationService, private _router: Router) {  }

  ngOnInit(){
    this.g = document.getElementById('errorMessage') as HTMLElement;
    this.g.style.display = 'none';
  }

  signin() {
    this.g.style.display = 'none';
    this._authenticationService.signin(
      this.credentials).subscribe(result =>
      this._router.navigate(['/authentication/members', this._authenticationService.user._id]),
      error => {
        this.errorMessage = error;
        this.g.style.display = 'none';
        this.g.style.display = 'block';
      } );
  }
}
