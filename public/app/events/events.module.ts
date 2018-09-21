import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EventsRoutes } from './events.routes';
import { EventsComponent } from './events.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

import { PipeModule }    from '../Filters/filter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipeModule.forRoot(),
    RouterModule.forChild(EventsRoutes),
  ],
  declarations: [
    EventsComponent,
    CreateComponent,
    ListComponent,
    EditComponent,
  ]
})
export class EventsModule {}
