"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eggs_component_1 = require("./eggs.component");
const create_component_1 = require("./create/create.component");
const list_component_1 = require("./list/list.component");
const edit_component_1 = require("./edit/edit.component");
exports.EggsRoutes = [{
        path: 'eggs',
        component: eggs_component_1.EggsComponent,
        children: [
            { path: '', component: list_component_1.ListComponent },
            { path: 'create', component: create_component_1.CreateComponent },
            { path: ':eggId/edit', component: edit_component_1.EditComponent }
        ]
    }];
//# sourceMappingURL=eggs.routes.js.map