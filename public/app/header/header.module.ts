import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderRoutes } from './header.routes';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HeaderRoutes),
  ],
  declarations: [
    HeaderComponent,
  ]
})

export class HeaderModule {}
