"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_component_1 = require("./events.component");
const create_component_1 = require("./create/create.component");
const list_component_1 = require("./list/list.component");
const edit_component_1 = require("./edit/edit.component");
exports.EventsRoutes = [{
        path: 'events',
        component: events_component_1.EventsComponent,
        children: [
            { path: '', component: list_component_1.ListComponent },
            { path: 'create', component: create_component_1.CreateComponent },
            { path: ':eventId/edit', component: edit_component_1.EditComponent }
        ]
    }];
//# sourceMappingURL=events.routes.js.map