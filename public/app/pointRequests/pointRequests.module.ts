import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PointRequestsRoutes } from './pointRequests.routes';
import { PointRequestsComponent } from './pointRequests.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

import { PipeModule }    from '../Filters/filter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipeModule.forRoot(),
    RouterModule.forChild(PointRequestsRoutes),
  ],
  declarations: [
    PointRequestsComponent,
    CreateComponent,
    ListComponent,
    EditComponent,
  ]
})
export class PointRequestsModule {}
