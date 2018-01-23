import { Routes } from '@angular/router';

import { getInvolvedComponent } from './getInvolved.component';
import { becomeAMemberComponent } from './becomeAMember/becomeAMember.component';
import { alreadyAMemberComponent } from './alreadyAMember/alreadyAMember.component';

export const getInvolvedRoutes: Routes = [{
  path: 'getInvolved',
  component: getInvolvedComponent,
  children: [
    { path: 'becomeAMember', component: becomeAMemberComponent },
    { path: 'alreadyAMember', component: alreadyAMemberComponent },
  ],
}];
