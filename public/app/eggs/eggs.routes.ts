import { Routes } from '@angular/router';
import { EggsComponent } from './eggs.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

export const EggsRoutes: Routes = [{
  path: 'eggs',
  component: EggsComponent,
  children: [
	{path: '', component: ListComponent},
	{path: 'create', component: CreateComponent},
	{path: ':eggId/edit', component: EditComponent}
  ]
}];
