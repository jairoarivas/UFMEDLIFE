import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EventsService } from '../events.service';


@Component({
  selector: 'edit',
  templateUrl: 'app/events/edit/edit.template.html',
  styleUrls: ['app/app.styles.css']
})
export class EditComponent {
	event: any = {};
	errorMessage: string;
	paramsObserver: any;
  g: HTMLElement;
  s:HTMLElement;

	constructor(private _router:Router,
				private _route: ActivatedRoute,
				private _eventsService: EventsService) {}

	ngOnInit() {
    this.g = document.getElementById('errorMessage') as HTMLElement;
    this.g.style.display = 'none';
    this.s = document.getElementById('successMessage') as HTMLElement;
    this.s.style.display = 'none';
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
		this._eventsService.update(this.event).subscribe(savedEvent =>{
      this.s.style.display = 'none';
      this.s.style.display = 'block';
      setTimeout(() => {
        this._router.navigate(['/events']);
      }, 1500);
    } ,
		error => {
      this.errorMessage = error;
      this.g.style.display = 'none';
      this.g.style.display = 'block';
    } );
	}
}
