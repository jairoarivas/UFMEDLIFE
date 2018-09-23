import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  public user = window['user'];

  private _signinURL = 'api/auth/signin';
  private _signupURL = 'api/auth/signup';
  private _baseURL = 'api/auth/users';
  private _forgotPasswordURL = 'api/forgotPassword';
  private _resetURL = 'api/resetPassword';

  constructor(private http: Http) {

  }

  //---------------------authentication------------//

  isLoggedIn(): boolean {
    return (!!this.user);
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


//-----------------------------Crud Module--------------------------//

  read(userId: string): Observable<any> {
    return this.http
      .get(`${this._baseURL}/${userId}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }
  update(user: any): Observable<any> {
		return this.http
			.put(`${this._baseURL}/${user._id}`, user)
			.map((res: Response) => res.json())
			.catch(this.handleError);
  }
  addPoints(user: any): Observable<any> {
		return this.http
			.put(`${this._baseURL}/${user._id}`, user)
			.map((res: Response) => res.json())
			.catch(this.handleError);
  }
  delete(userId: any): Observable<any> {
		return this.http
			.delete(`${this._baseURL}/${userId}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}
  list(): Observable<any> {
		return this.http
			.get(this._baseURL)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}
//-----------------------------Forgot Password--------------------------//
  forgotPassword(credentials: any): Observable<any> {
    return this.http.post(this._forgotPasswordURL, credentials)
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

  readForgotPassword(token: string): Observable<any> {
		return this.http
			.get(`${this._resetURL}/${token}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().message || 'Server error');
  }
}
