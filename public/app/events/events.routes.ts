import { Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

export const EventsRoutes: Routes = [{
  path: 'events',
  component: EventsComponent,
  children: [
	{path: '', component: ListComponent},
	{path: 'create', component: CreateComponent},
	{path: ':eventId/edit', component: EditComponent}
  ]
}];
