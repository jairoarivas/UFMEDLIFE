import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {EventsService} from '../events.service';

@Component({
  selector: 'create',
  templateUrl: 'app/events/create/create.template.html',
  styleUrls: ['app/app.styles.css']
})
export class CreateComponent {
	event: any = {};
	errorMessage: string;

	constructor(private _router:Router,
				private _eventsService: EventsService) {}

	create() {
		this._eventsService.create(this.event).subscribe(createdEvent => this._router.navigate(['/events', createdEvent._id]),
							 				  				 error =>  this.errorMessage = error);
	}
}
