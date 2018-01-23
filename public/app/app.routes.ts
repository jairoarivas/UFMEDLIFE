import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { contactUsComponent } from './contactUs/contactUs.component';

export const AppRoutes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'contactUs',
  component: contactUsComponent
}
];
