"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const events_service_1 = require("../events.service");
let ListComponent = class ListComponent {
    constructor(_eventsService) {
        this._eventsService = _eventsService;
        this._eventsService.list().subscribe(events => this.events = events);
        this.filterBy = 'eventName';
    }
    ngOnInit() {
        this._eventsService.list().subscribe(events => this.events = events);
    }
    filterByName() {
        this.filterBy = 'eventName';
    }
    filterByValue() {
        this.filterBy = 'value';
    }
    filterByDate() {
        this.filterBy = 'date';
        //console.log(this.filterBy);
    }
    filterByCode() {
        this.filterBy = 'Code';
    }
    deleteModal(m) {
        //console.log("delete button clicked");
        //console.log(m);
        this.currentEvent = m;
    }
    delete() {
        this._eventsService.delete(this.currentEvent._id).subscribe(deletedEvent => {
            this._eventsService.list().subscribe(events => this.events = events);
            this.currentEvent = undefined;
        }, error => this.errorMessage = error);
    }
};
ListComponent = __decorate([
    core_1.Component({
        selector: 'list',
        templateUrl: 'app/events/list/list.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [events_service_1.EventsService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map