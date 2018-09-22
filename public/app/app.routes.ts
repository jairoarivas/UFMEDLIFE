import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { contactUsComponent } from './contactUs/contactUs.component';
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
];
