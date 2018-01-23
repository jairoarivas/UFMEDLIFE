"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getInvolved_component_1 = require("./getInvolved.component");
var becomeAMember_component_1 = require("./becomeAMember/becomeAMember.component");
var alreadyAMember_component_1 = require("./alreadyAMember/alreadyAMember.component");
exports.getInvolvedRoutes = [{
        path: 'getInvolved',
        component: getInvolved_component_1.getInvolvedComponent,
        children: [
            { path: 'becomeAMember', component: becomeAMember_component_1.becomeAMemberComponent },
            { path: 'alreadyAMember', component: alreadyAMember_component_1.alreadyAMemberComponent },
        ],
    }];
//# sourceMappingURL=getInvolved.routes.js.map