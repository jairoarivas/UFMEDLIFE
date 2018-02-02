import {Component} from '@angular/core';

import {EventsService} from '../events.service';

@Component({
	selector: 'list',
	templateUrl: 'app/events/list/list.template.html',
  styleUrls: ['app/app.styles.css']
})
export class ListComponent{
	events: any;
	errorMessage: string;

	constructor(private _eventsService: EventsService) {}

	ngOnInit() {
		this._eventsService.list().subscribe(events  => this.events = events);
	}
}
