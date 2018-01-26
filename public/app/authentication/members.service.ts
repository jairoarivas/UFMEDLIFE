import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestMethod, Response} from '@angular/http';


@Injectable()
export class MembersService {

  private _baseURL = 'api/members';

	constructor (private _http: Http) {}

	read(userId: string): Observable<any> {
		return this._http
			.get(`${this._baseURL}/${userId}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	update(user: any): Observable<any> {
		return this._http
			.put(`${this._baseURL}/${user._id}`, user)
			.map((res: Response) => res.json())
			.catch(this.handleError);
  	}

	delete(userId: any): Observable<any> {
		return this._http
			.delete(`${this._baseURL}/${userId}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	list(): Observable<any> {
		return this._http
			.get(this._baseURL)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	private handleError(error: Response) {
		return Observable.throw(error.json().message || 'Server error');
	}
}
