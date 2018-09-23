"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const affairs_component_1 = require("./affairs.component");
const create_component_1 = require("./create/create.component");
const list_component_1 = require("./list/list.component");
const edit_component_1 = require("./edit/edit.component");
exports.AffairsRoutes = [{
        path: 'affairs',
        component: affairs_component_1.AffairsComponent,
        children: [
            { path: '', component: list_component_1.ListComponent },
            { path: 'create', component: create_component_1.CreateComponent },
            { path: ':affairId/edit', component: edit_component_1.EditComponent }
        ]
    }];
//# sourceMappingURL=affairs.routes.js.map