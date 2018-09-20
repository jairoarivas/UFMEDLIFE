"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var authentication_routes_1 = require("./authentication.routes");
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
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                router_1.RouterModule.forChild(authentication_routes_1.AuthenticationRoutes),
            ],
            declarations: [
                authentication_component_1.AuthenticationComponent,
                signin_component_1.SigninComponent,
                signup_component_1.SignupComponent,
                list_component_1.ListComponent,
                view_component_1.ViewComponent,
                edit_component_1.EditComponent,
                pointList_component_1.PointListComponent,
                addPoint_component_1.AddPointComponent,
                forgotPassword_component_1.ForgotPasswordComponent,
                resetPassword_component_1.ResetPasswordComponent,
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());
exports.AuthenticationModule = AuthenticationModule;
//# sourceMappingURL=authentication.module.js.map