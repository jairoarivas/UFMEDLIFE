"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var contactUs_component_1 = require("./contactUs/contactUs.component");
var itReset_component_1 = require("./resetConfirmations/itReset.component");
var itSent_component_1 = require("./resetConfirmations/itSent.component");
exports.AppRoutes = [{
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'contactUs',
        component: contactUs_component_1.contactUsComponent
    },
    {
        path: 'itReset',
        component: itReset_component_1.itResetComponent
    },
    {
        path: 'itSent',
        component: itSent_component_1.itSentComponent
    }
];
//# sourceMappingURL=app.routes.js.map