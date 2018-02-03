import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  public user = window['user'];

  private _signinURL = 'api/auth/signin';
  private _signupURL = 'api/auth/signup';
  private _forgotPasswordURL = 'api/forgotPassword';
  private _resetURL = 'api/resetPassword';

  constructor(private http: Http) {

  }

  isLoggedIn(): boolean {
    return (!!this.user);
  }

  forgotPassword(credentials: any): Observable<any> {
    let body = JSON.stringify(credentials);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._forgotPasswordURL, body, options)
      .map((res: Response) => res.json())
      .catch(this.handleError)
  }

  resetPassword(credentials: any): Observable<any> {
    let body = JSON.stringify(credentials);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this._resetURL}/${credentials.resetPasswordToken}`, body, options)
      .map((res: Response) => res.json())
      .catch(this.handleError)
  }

  read(token: string): Observable<any> {
		return this.http
			.get(`${this._resetURL}/${token}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

  signin(credentials: any): Observable<any> {
    let body = JSON.stringify(credentials);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._signinURL, body, options)
      .map(res => this.user = res.json())
      .catch(this.handleError)
  }

  signup(user: any): Observable<any> {
    return this.http.post(this._signupURL, user)
      .map((res: Response) => res.json())
      .catch(this.handleError)
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().message || 'Server error');
  }
}
