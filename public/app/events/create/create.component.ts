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

  g: HTMLElement;
  s:HTMLElement;

	constructor(private _router:Router,
				private _eventsService: EventsService) {}

  ngOnInit(){
    this.g = document.getElementById('errorMessage') as HTMLElement;
    this.g.style.display = 'none';
    this.s = document.getElementById('successMessage') as HTMLElement;
    this.s.style.display = 'none';
  }

	create() {
    this.event.eventName = this.event.eventName.replace(/\s+/g, '');
		this._eventsService.create(this.event).subscribe(createdEvent => {
      this.s.style.display = 'none';
      this.s.style.display = 'block';
      setTimeout(() => {
          this._router.navigate(['/events']);
      }, 1500);
    },
		error => {
      this.errorMessage = error;
      this.g.style.display = 'none';
      this.g.style.display = 'block';
    });
	}
}
