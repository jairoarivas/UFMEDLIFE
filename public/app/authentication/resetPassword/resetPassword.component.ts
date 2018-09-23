import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'resetPassword',
  templateUrl: 'app/authentication/resetPassword/resetPassword.template.html',
  styleUrls: ['app/app.styles.css']
})
export class ResetPasswordComponent {
  user: any = {};
  errorMessage: string;
  paramsObserver: any;
  g: HTMLElement;
  s:HTMLElement;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.g = document.getElementById('errorMessage') as HTMLElement;
    this.g.style.display = 'none';
    this.s = document.getElementById('successMessage') as HTMLElement;
    this.s.style.display = 'none';
    this.paramsObserver = this._route.params.subscribe(params => {
      let token = params['token'];

      this._authenticationService.readForgotPassword(token).subscribe(user => {
        this.user = user;
      },
        error => this._router.navigate(['/authentication/forgotPassword']));
    });
  }

  ngOnDestroy() {
    this.paramsObserver.unsubscribe();
  }

  resetPassword() {
    this.g.style.display = 'none';
    this._authenticationService.resetPassword(this.user).subscribe(savedUser => {
      this.s.style.display = 'none';
      this.s.style.display = 'block';
      setTimeout(() => {
        this._router.navigate(['/authentication/signin'])
      }, 2000);
    },
      error => {
        this.g.style.display = 'none';
        this.g.style.display = 'block';
        this.errorMessage = error;
      });
  }
}
