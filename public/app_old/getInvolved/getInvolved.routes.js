"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getInvolved_component_1 = require("./getInvolved.component");
var becomeAMember_component_1 = require("./becomeAMember/becomeAMember.component");
var alreadyAMember_component_1 = require("./alreadyAMember/alreadyAMember.component");
var serviceTrips_component_1 = require("./serviceTrips/serviceTrips.component");
exports.getInvolvedRoutes = [{
        path: 'getInvolved',
        component: getInvolved_component_1.getInvolvedComponent,
        children: [
            { path: 'AboutUs', component: becomeAMember_component_1.becomeAMemberComponent },
            { path: 'Events', component: alreadyAMember_component_1.alreadyAMemberComponent },
            { path: 'ServiceTrips', component: serviceTrips_component_1.serviceTripsComponent },
        ],
    }];
//# sourceMappingURL=getInvolved.routes.js.map