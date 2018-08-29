import { Routes } from '@angular/router';

import { getInvolvedComponent } from './getInvolved.component';
import { becomeAMemberComponent } from './becomeAMember/becomeAMember.component';
import { alreadyAMemberComponent } from './alreadyAMember/alreadyAMember.component';
import { serviceTripsComponent } from './serviceTrips/serviceTrips.component';

export const getInvolvedRoutes: Routes = [{
  path: 'getInvolved',
  component: getInvolvedComponent,
  children: [
    { path: 'AboutUs', component: becomeAMemberComponent },
    { path: 'Events', component: alreadyAMemberComponent },
    { path: 'ServiceTrips', component: serviceTripsComponent },
  ],
}];
