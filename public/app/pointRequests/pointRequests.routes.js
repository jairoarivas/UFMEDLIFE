"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pointRequests_component_1 = require("./pointRequests.component");
const create_component_1 = require("./create/create.component");
const list_component_1 = require("./list/list.component");
const edit_component_1 = require("./edit/edit.component");
exports.PointRequestsRoutes = [{
        path: 'pointRequests',
        component: pointRequests_component_1.PointRequestsComponent,
        children: [
            { path: '', component: list_component_1.ListComponent },
            { path: 'create', component: create_component_1.CreateComponent },
            { path: ':pointRequestId/edit', component: edit_component_1.EditComponent }
        ]
    }];
//# sourceMappingURL=pointRequests.routes.js.map