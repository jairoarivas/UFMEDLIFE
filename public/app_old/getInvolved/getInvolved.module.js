"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var getInvolved_routes_1 = require("./getInvolved.routes");
var getInvolved_component_1 = require("./getInvolved.component");
var becomeAMember_component_1 = require("./becomeAMember/becomeAMember.component");
var alreadyAMember_component_1 = require("./alreadyAMember/alreadyAMember.component");
var serviceTrips_component_1 = require("./serviceTrips/serviceTrips.component");
var getInvolvedModule = /** @class */ (function () {
    function getInvolvedModule() {
    }
    getInvolvedModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(getInvolved_routes_1.getInvolvedRoutes),
            ],
            declarations: [
                getInvolved_component_1.getInvolvedComponent,
                becomeAMember_component_1.becomeAMemberComponent,
                alreadyAMember_component_1.alreadyAMemberComponent,
                serviceTrips_component_1.serviceTripsComponent,
            ]
        })
    ], getInvolvedModule);
    return getInvolvedModule;
}());
exports.getInvolvedModule = getInvolvedModule;
//# sourceMappingURL=getInvolved.module.js.map