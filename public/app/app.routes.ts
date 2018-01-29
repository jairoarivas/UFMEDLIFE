import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { contactUsComponent } from './contactUs/contactUs.component';
import { itResetComponent } from './resetConfirmations/itReset.component';
import { itSentComponent } from './resetConfirmations/itSent.component';

export const AppRoutes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'contactUs',
  component: contactUsComponent
},
{
  path: 'itReset',
  component: itResetComponent
},
{
  path: 'itSent',
  component: itSentComponent
}
];
