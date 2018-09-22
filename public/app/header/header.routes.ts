import { Routes } from '@angular/router';
import { HeaderComponent } from './header.component';

export const HeaderRoutes: Routes = [{
  path: '',
  component: HeaderComponent,
  outlet: 'header',
}];
