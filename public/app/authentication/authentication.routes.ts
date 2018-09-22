import { Routes } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
// import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
// import { ResetPasswordComponent } from './resetPassword/resetPassword.component';
// import { PointListComponent } from './pointList/pointList.component';
// import { AddPointComponent } from './addPoint/addPoint.component';

export const AuthenticationRoutes: Routes = [{
  path: 'authentication',
  component: AuthenticationComponent,
  children: [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'members', component: ListComponent },
    { path: ':userId', component: ViewComponent},
    { path: ':userId/edit', component: EditComponent},
    // { path: 'forgotPassword', component: ForgotPasswordComponent },
    // { path: 'resetPassword/:token', component: ResetPasswordComponent },
    // { path: 'addPoint', component: PointListComponent },
    // { path: 'addPoint/:userId', component: AddPointComponent }

  ],
}];
