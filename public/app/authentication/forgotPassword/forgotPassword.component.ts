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
  g: HTMLElement;
  s:HTMLElement;

  constructor (private _authenticationService: AuthenticationService, private _router: Router) {  }

  ngOnInit(){
    this.g = document.getElementById('errorMessage') as HTMLElement;
    this.g.style.display = 'none';
    this.s = document.getElementById('successMessage') as HTMLElement;
    this.s.style.display = 'none';
  }

  forgotPassword() {
    this.g.style.display = 'none';
    this._authenticationService.forgotPassword(
      this.credentials).subscribe(result => {
        this.s.style.display = 'none';
        this.s.style.display = 'block';
        setTimeout(() => {
          this._router.navigate(['/authentication/signin']);
        }, 3000);
      },
      error => {
        this.errorMessage = error;
        this.g.style.display = 'none';
        this.g.style.display = 'block';
      }  );
  }
}
