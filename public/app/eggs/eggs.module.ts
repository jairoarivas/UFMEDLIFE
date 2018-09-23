import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EggsRoutes } from './eggs.routes';
import { EggsComponent } from './eggs.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

import { PipeModule }    from '../Filters/filter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipeModule.forRoot(),
    RouterModule.forChild(EggsRoutes),
  ],
  declarations: [
    EggsComponent,
    CreateComponent,
    ListComponent,
    EditComponent,
  ]
})
export class EggsModule {}
