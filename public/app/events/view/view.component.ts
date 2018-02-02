import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { EventsService } from '../events.service';

@Component({
  selector: 'view',
  templateUrl: 'app/events/view/view.template.html',
  styleUrls: ['app/app.styles.css']
})
export class ViewComponent {
	user: any;
	event: any;
	routingObserver: any;
	errorMessage: string;
	allowEdit: boolean = false;

	constructor(private _router:Router,
				private _route: ActivatedRoute,
				private _authenticationService: AuthenticationService,
				private _eventsService: EventsService) {}

	ngOnInit() {
		this.user = this._authenticationService.user

		this.routingObserver = this._route.params.subscribe(params => {
			let eventId = params['eventId'];

			this._eventsService
				.read(eventId)
				.subscribe(
					event => {
						this.event = event;
						this.allowEdit = (this.user && this.user._id === 'Admin');
		 			},
					error => this._router.navigate(['/events'])
				);
		});
	}

	ngOnDestroy() {
		this.routingObserver.unsubscribe();
	}

	delete() {
		this._eventsService.delete(this.event._id).subscribe(deletedEvent => this._router.navigate(['/events']),
																 error => this.errorMessage = error);
	}
}
