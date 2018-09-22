"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var authentication_service_1 = require("./authentication/authentication.service");
var authentication_module_1 = require("./authentication/authentication.module");
var header_module_1 = require("./header/header.module");
var events_service_1 = require("./events/events.service");
var getInvolved_module_1 = require("./getInvolved/getInvolved.module");
var contactUs_component_1 = require("./contactUs/contactUs.component");
var home_component_1 = require("./home/home.component");
var itReset_component_1 = require("./resetConfirmations/itReset.component");
var itSent_component_1 = require("./resetConfirmations/itSent.component");
//import { ViewProfileComponent } from './viewProfile/viewProfile.component';
var events_module_1 = require("./events/events.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                authentication_module_1.AuthenticationModule,
                header_module_1.HeaderModule,
                getInvolved_module_1.getInvolvedModule,
                events_module_1.EventsModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                router_1.RouterModule.forRoot(app_routes_1.AppRoutes)
            ],
            declarations: [
                home_component_1.HomeComponent,
                contactUs_component_1.contactUsComponent,
                itSent_component_1.itSentComponent,
                // ViewProfileComponent,
                itReset_component_1.itResetComponent,
                app_component_1.AppComponent
            ],
            providers: [
                authentication_service_1.AuthenticationService,
                events_service_1.EventsService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map