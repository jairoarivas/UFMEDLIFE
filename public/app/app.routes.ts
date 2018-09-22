import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { contactUsComponent } from './contactUs/contactUs.component';
import { itResetComponent } from './resetConfirmations/itReset.component';
import { itSentComponent } from './resetConfirmations/itSent.component';
// import { ViewProfileComponent } from './viewProfile/viewProfile.component';
import { HeaderComponent } from './header/header.component';

export const AppRoutes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: '',
  component: HeaderComponent,
  outlet: 'header',
},
{
  path: 'ContactUs',
  component: contactUsComponent
},
{
  path: 'itReset',
  component: itResetComponent
},
{
  path: 'itSent',
  component: itSentComponent
},
// {
//   path: 'viewProfile',
//   component: ViewProfileComponent
// },
];
