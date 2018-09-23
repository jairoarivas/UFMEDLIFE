import { Routes } from '@angular/router';
import { AffairsComponent } from './affairs.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

export const AffairsRoutes: Routes = [{
  path: 'affairs',
  component: AffairsComponent,
  children: [
	{path: '', component: ListComponent},
	{path: 'create', component: CreateComponent},
	{path: ':affairId/edit', component: EditComponent}
  ]
}];
