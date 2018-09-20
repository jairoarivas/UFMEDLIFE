import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EventsRoutes } from './events.routes';
import { EventsComponent } from './events.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(EventsRoutes),
  ],
  declarations: [
    EventsComponent,
    CreateComponent,
    ListComponent,
    ViewComponent,
    EditComponent,
  ]
})
export class EventsModule {}
