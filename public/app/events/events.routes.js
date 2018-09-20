"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events_component_1 = require("./events.component");
var create_component_1 = require("./create/create.component");
var list_component_1 = require("./list/list.component");
var view_component_1 = require("./view/view.component");
var edit_component_1 = require("./edit/edit.component");
exports.EventsRoutes = [{
        path: 'events',
        component: events_component_1.EventsComponent,
        children: [
            { path: '', component: list_component_1.ListComponent },
            { path: 'create', component: create_component_1.CreateComponent },
            { path: ':eventId', component: view_component_1.ViewComponent },
            { path: ':eventId/edit', component: edit_component_1.EditComponent }
        ],
    }];
//# sourceMappingURL=events.routes.js.map