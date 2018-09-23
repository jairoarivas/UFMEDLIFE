import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestMethod, Response} from '@angular/http';


@Injectable()
export class EventsService {
	private _baseURL = 'api/events';
	private _codeURL = 'api/eventCode';

	constructor (private _http: Http) {}

	create(event: any): Observable<any> {
		return this._http
			.post(this._baseURL, event)
			.map((res: Response) => res.json())
			.catch(this.handleError);
  	}

	read(eventId: string): Observable<any> {
		return this._http
			.get(`${this._baseURL}/${eventId}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	readCode(eventCode: string): Observable<any> {
		return this._http
			.get(`${this._codeURL}/${eventCode}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	update(event: any): Observable<any> {
		return this._http
			.put(`${this._baseURL}/${event._id}`, event)
			.map((res: Response) => res.json())
			.catch(this.handleError);
  	}

	delete(eventId: any): Observable<any> {
		return this._http
			.delete(`${this._baseURL}/${eventId}`)
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
