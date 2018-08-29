import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { getInvolvedRoutes } from './getInvolved.routes';
import { getInvolvedComponent } from './getInvolved.component';
import { becomeAMemberComponent } from './becomeAMember/becomeAMember.component';
import { alreadyAMemberComponent } from './alreadyAMember/alreadyAMember.component';
import { serviceTripsComponent } from './serviceTrips/serviceTrips.component';

@NgModule ({
  imports: [
    RouterModule.forChild(getInvolvedRoutes),
  ],
  declarations: [
    getInvolvedComponent,
    becomeAMemberComponent,
    alreadyAMemberComponent,
    serviceTripsComponent,
  ]
})
export class getInvolvedModule {}
