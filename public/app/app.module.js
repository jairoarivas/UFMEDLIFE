"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const common_1 = require("@angular/common");
const app_component_1 = require("./app.component");
const app_routes_1 = require("./app.routes");
const authentication_service_1 = require("./authentication/authentication.service");
const authentication_module_1 = require("./authentication/authentication.module");
const header_module_1 = require("./header/header.module");
const eggs_service_1 = require("./eggs/eggs.service");
const affairs_service_1 = require("./affairs/affairs.service");
const getInvolved_module_1 = require("./getInvolved/getInvolved.module");
const contactUs_component_1 = require("./contactUs/contactUs.component");
const home_component_1 = require("./home/home.component");
const eggs_module_1 = require("./eggs/eggs.module");
const affairs_module_1 = require("./affairs/affairs.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            authentication_module_1.AuthenticationModule,
            header_module_1.HeaderModule,
            getInvolved_module_1.getInvolvedModule,
            eggs_module_1.EggsModule,
            affairs_module_1.AffairsModule,
            forms_1.FormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forRoot(app_routes_1.AppRoutes)
        ],
        declarations: [
            home_component_1.HomeComponent,
            contactUs_component_1.contactUsComponent,
            app_component_1.AppComponent
        ],
        providers: [
            authentication_service_1.AuthenticationService,
            eggs_service_1.EggsService,
            affairs_service_1.AffairsService,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map