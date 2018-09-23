"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PipeModule_1;
const core_1 = require("@angular/core");
const filter_pipe_1 = require("./filter.pipe");
const filterEvents_pipe_1 = require("./filterEvents.pipe");
const orderBy_pipe_1 = require("./orderBy.pipe");
const orderByValue_pipe_1 = require("./orderByValue.pipe");
const orderByDate_pipe_1 = require("./orderByDate.pipe");
const dateFormat_pipe_1 = require("./dateFormat.pipe");
let PipeModule = PipeModule_1 = class PipeModule {
    static forRoot() {
        return {
            ngModule: PipeModule_1,
            providers: [],
        };
    }
};
PipeModule = PipeModule_1 = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [filter_pipe_1.FilterPipe, orderBy_pipe_1.SortPipe, orderByValue_pipe_1.NumberSortPipe, dateFormat_pipe_1.customDateFormatPipe, orderByDate_pipe_1.DateSortPipe, filterEvents_pipe_1.FilterEventsPipe],
        exports: [filter_pipe_1.FilterPipe, orderBy_pipe_1.SortPipe, orderByValue_pipe_1.NumberSortPipe, dateFormat_pipe_1.customDateFormatPipe, orderByDate_pipe_1.DateSortPipe, filterEvents_pipe_1.FilterEventsPipe],
    })
], PipeModule);
exports.PipeModule = PipeModule;
//# sourceMappingURL=filter.module.js.map