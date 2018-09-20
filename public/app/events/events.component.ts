import { Component } from '@angular/core';
import { EventsService } from './events.service';

@Component({
  selector: 'events',
  template: `<div style = "overflow: auto;">
      <router-outlet></router-outlet>
  </div>`
  ,
  providers: [EventsService]
})
export class EventsComponent {}
