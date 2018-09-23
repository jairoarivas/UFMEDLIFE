import { Routes } from '@angular/router';
import { PointRequestsComponent } from './pointRequests.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

export const PointRequestsRoutes: Routes = [{
  path: 'pointRequests',
  component: PointRequestsComponent,
  children: [
	{path: '', component: ListComponent},
	{path: 'create', component: CreateComponent},
	{path: ':pointRequestId/edit', component: EditComponent}
  ]
}];
