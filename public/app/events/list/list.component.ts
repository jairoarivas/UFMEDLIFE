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
	currentEvent: any;
	filterBy: string;
	constructor(private _eventsService: EventsService) {
		this._eventsService.list().subscribe(events  => this.events = events);
		this.filterBy = 'eventName';
	}

	ngOnInit() {
		this._eventsService.list().subscribe(events  => this.events = events);
	}

	filterByName(){
		this.filterBy = 'eventName';
	}

	filterByValue(){
		this.filterBy = 'value';
	}

	filterByDate(){
		this.filterBy = 'date';
		console.log(this.filterBy);
	}

	filterByCode(){
		this.filterBy = 'Code';
	}

	deleteModal(m){
		console.log("delete button clicked");
		console.log(m);
		this.currentEvent = m;
	}

	delete() {
		this._eventsService.delete(this.currentEvent._id).subscribe(deletedEvent => {
			this._eventsService.list().subscribe(events  => this.events = events)
			this.currentEvent = undefined;
		} ,
		error => this.errorMessage = error);
	}

}
