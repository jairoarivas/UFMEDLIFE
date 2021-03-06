"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const affairs_routes_1 = require("./affairs.routes");
const affairs_component_1 = require("./affairs.component");
const create_component_1 = require("./create/create.component");
const list_component_1 = require("./list/list.component");
const edit_component_1 = require("./edit/edit.component");
const filter_module_1 = require("../Filters/filter.module");
let AffairsModule = class AffairsModule {
};
AffairsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            filter_module_1.PipeModule.forRoot(),
            router_1.RouterModule.forChild(affairs_routes_1.AffairsRoutes),
        ],
        declarations: [
            affairs_component_1.AffairsComponent,
            create_component_1.CreateComponent,
            list_component_1.ListComponent,
            edit_component_1.EditComponent,
        ]
    })
], AffairsModule);
exports.AffairsModule = AffairsModule;
//# sourceMappingURL=affairs.module.js.map