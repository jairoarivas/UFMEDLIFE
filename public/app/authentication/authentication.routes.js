"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_component_1 = require("./authentication.component");
const signin_component_1 = require("./signin/signin.component");
const signup_component_1 = require("./signup/signup.component");
const list_component_1 = require("./list/list.component");
const view_component_1 = require("./view/view.component");
const edit_component_1 = require("./edit/edit.component");
const forgotPassword_component_1 = require("./forgotPassword/forgotPassword.component");
const resetPassword_component_1 = require("./resetPassword/resetPassword.component");
// import { PointListComponent } from './pointList/pointList.component';
// import { AddPointComponent } from './addPoint/addPoint.component';
exports.AuthenticationRoutes = [{
        path: 'authentication',
        component: authentication_component_1.AuthenticationComponent,
        children: [
            { path: 'signin', component: signin_component_1.SigninComponent },
            { path: 'signup', component: signup_component_1.SignupComponent },
            { path: 'members', component: list_component_1.ListComponent },
            { path: 'members/:userId', component: view_component_1.ViewComponent },
            { path: 'members/:userId/edit', component: edit_component_1.EditComponent },
            { path: 'forgotPassword', component: forgotPassword_component_1.ForgotPasswordComponent },
            { path: 'resetPassword/:token', component: resetPassword_component_1.ResetPasswordComponent }
            // { path: 'addPoint', component: PointListComponent },
            // { path: 'addPoint/:userId', component: AddPointComponent }
        ],
    }];
//# sourceMappingURL=authentication.routes.js.map