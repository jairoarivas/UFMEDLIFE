import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'resetPassword',
  templateUrl: 'app/authentication/resetPassword/resetPassword.template.html'
})
export class ResetPasswordComponent {
  user: any = {};
  errorMessage: string;
  paramsObserver: any;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.paramsObserver = this._route.params.subscribe(params => {
      let token = params['token'];

      this._authenticationService.read(token).subscribe(user => {
        this.user = user;
      },
        error => this._router.navigate(['/authentication/forgotPassword']));
    });
  }

  ngOnDestroy() {
    this.paramsObserver.unsubscribe();
  }

  resetPassword() {
    this._authenticationService.resetPassword(this.user).subscribe(savedUser => this._router.navigate(['/itReset']),
      error => this.errorMessage = error);
  }
}
