import { Component } from '@angular/core';
import { EventsService } from './events.service';

@Component({
  selector: 'events',
  template: '<router-outlet></router-outlet>',
  providers: [EventsService]
})
export class EventsComponent {}
