"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authentication_component_1 = require("./authentication.component");
var signin_component_1 = require("./signin/signin.component");
var signup_component_1 = require("./signup/signup.component");
var list_component_1 = require("./list/list.component");
var view_component_1 = require("./view/view.component");
var edit_component_1 = require("./edit/edit.component");
var forgotPassword_component_1 = require("./forgotPassword/forgotPassword.component");
var resetPassword_component_1 = require("./resetPassword/resetPassword.component");
var pointList_component_1 = require("./pointList/pointList.component");
var addPoint_component_1 = require("./addPoint/addPoint.component");
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
            { path: 'resetPassword/:token', component: resetPassword_component_1.ResetPasswordComponent },
            { path: 'addPoint', component: pointList_component_1.PointListComponent },
            { path: 'addPoint/:userId', component: addPoint_component_1.AddPointComponent }
        ],
    }];
//# sourceMappingURL=authentication.routes.js.map