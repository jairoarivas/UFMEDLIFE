import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestMethod, Response} from '@angular/http';


@Injectable()
export class AffairsService {
	private _baseURL = 'api/affairs';
	private _codeURL = 'api/affairCode';

	constructor (private _http: Http) {}

	create(affair: any): Observable<any> {
		return this._http
			.post(this._baseURL, affair)
			.map((res: Response) => res.json())
			.catch(this.handleError);
  	}

	read(affairId: string): Observable<any> {
		return this._http
			.get(`${this._baseURL}/${affairId}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	readCode(affairCode: string): Observable<any> {
		return this._http
			.get(`${this._codeURL}/${affairCode}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	update(affair: any): Observable<any> {
		return this._http
			.put(`${this._baseURL}/${affair._id}`, affair)
			.map((res: Response) => res.json())
			.catch(this.handleError);
  	}

	delete(affairId: any): Observable<any> {
		return this._http
			.delete(`${this._baseURL}/${affairId}`)
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
