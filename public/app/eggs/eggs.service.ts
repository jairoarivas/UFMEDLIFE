import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestMethod, Response} from '@angular/http';


@Injectable()
export class EggsService {
	private _baseURL = 'api/eggs';
	private _codeURL = 'api/eggCode';

	constructor (private _http: Http) {}

	create(egg: any): Observable<any> {
		return this._http
			.post(this._baseURL, egg)
			.map((res: Response) => res.json())
			.catch(this.handleError);
  	}

	read(eggId: string): Observable<any> {
		return this._http
			.get(`${this._baseURL}/${eggId}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	readCode(eggCode: string): Observable<any> {
		return this._http
			.get(`${this._codeURL}/${eggCode}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	update(egg: any): Observable<any> {
		return this._http
			.put(`${this._baseURL}/${egg._id}`, egg)
			.map((res: Response) => res.json())
			.catch(this.handleError);
  	}

	delete(eggId: any): Observable<any> {
		return this._http
			.delete(`${this._baseURL}/${eggId}`)
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
