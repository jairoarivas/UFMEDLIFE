import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestMethod, Response} from '@angular/http';


@Injectable()
export class PointRequestsService {
	private _baseURL = 'api/pointRequests';
	private _checkURL = 'api/pointRequestCheck';

	constructor (private _http: Http) {}

	create(pointRequest: any): Observable<any> {
		return this._http
			.post(this._baseURL, pointRequest)
			.map((res: Response) => res.json())
			.catch(this.handleError);
  	}

	read(pointRequestId: string): Observable<any> {
		return this._http
			.get(`${this._baseURL}/${pointRequestId}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	checkRequest(eventName: any, member: any): Observable<any> {
		return this._http
			.get(`${this._checkURL}/${eventName}/${member._id}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	update(pointRequest: any): Observable<any> {
		return this._http
			.put(`${this._baseURL}/${pointRequest._id}`, pointRequest)
			.map((res: Response) => res.json())
			.catch(this.handleError);
  	}

	delete(pointRequestId: any): Observable<any> {
		return this._http
			.delete(`${this._baseURL}/${pointRequestId}`)
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
