import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AffairsRoutes } from './affairs.routes';
import { AffairsComponent } from './affairs.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

import { PipeModule }    from '../Filters/filter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipeModule.forRoot(),
    RouterModule.forChild(AffairsRoutes),
  ],
  declarations: [
    AffairsComponent,
    CreateComponent,
    ListComponent,
    EditComponent,
  ]
})
export class AffairsModule {}
