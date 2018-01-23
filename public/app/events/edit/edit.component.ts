import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EventsService } from '../events.service';


@Component({
  selector: 'edit',
  templateUrl: 'app/events/edit/edit.template.html'
})
export class EditComponent {
	event: any = {};
	errorMessage: string;
	paramsObserver: any;

	constructor(private _router:Router,
				private _route: ActivatedRoute,
				private _eventsService: EventsService) {}

	ngOnInit() {
		this.paramsObserver = this._route.params.subscribe(params => {
			let eventId = params['eventId'];

			this._eventsService.read(eventId).subscribe(event => {
																this.event = event;
													 		},
															error => this._router.navigate(['/events']));
		});
	}

	ngOnDestroy() {
		this.paramsObserver.unsubscribe();
	}

	update() {
		this._eventsService.update(this.event).subscribe(savedEvent => this._router.navigate(['/events', savedEvent._id]),
							 				  				 error =>  this.errorMessage = error);
	}
}
