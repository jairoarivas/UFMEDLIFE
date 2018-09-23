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
  //roles = ['Admin', 'Officer', 'Member'];
  private showPassword = false;
  g: HTMLElement;
  s:HTMLElement;

  constructor (private _authenticationService: AuthenticationService, private _router: Router) { }

  ngOnInit(){
    this.g = document.getElementById('errorMessage') as HTMLElement;
    this.g.style.display = 'none';
    this.s = document.getElementById('successMessage') as HTMLElement;
    this.s.style.display = 'none';
  }

  signup() {
    this.g.style.display = 'none';
    this._authenticationService.signup(
      this.user).subscribe(result => {
        this.s.style.display = 'none';
        this.s.style.display = 'block';
        setTimeout(() => {
            this._router.navigate(['/authentication/signin']);
        }, 1500);

      },
      error => {
        this.errorMessage = error;
        this.g.style.display = 'none';
        this.g.style.display = 'block';
      }  );
  }
}
