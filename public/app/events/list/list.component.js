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
var core_1 = require("@angular/core");
var events_service_1 = require("../events.service");
var ListComponent = /** @class */ (function () {
    function ListComponent(_eventsService) {
        var _this = this;
        this._eventsService = _eventsService;
        this._eventsService.list().subscribe(function (events) { return _this.events = events; });
        this.filterBy = 'eventName';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._eventsService.list().subscribe(function (events) { return _this.events = events; });
    };
    ListComponent.prototype.filterByName = function () {
        this.filterBy = 'eventName';
    };
    ListComponent.prototype.filterByValue = function () {
        this.filterBy = 'value';
    };
    ListComponent.prototype.filterByDate = function () {
        this.filterBy = 'date';
        console.log(this.filterBy);
    };
    ListComponent.prototype.filterByCode = function () {
        this.filterBy = 'Code';
    };
    ListComponent.prototype.deleteModal = function (m) {
        console.log("delete button clicked");
        console.log(m);
        this.currentEvent = m;
    };
    ListComponent.prototype.delete = function () {
        var _this = this;
        this._eventsService.delete(this.currentEvent._id).subscribe(function (deletedEvent) {
            _this._eventsService.list().subscribe(function (events) { return _this.events = events; });
            _this.currentEvent = undefined;
        }, function (error) { return _this.errorMessage = error; });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'list',
            templateUrl: 'app/events/list/list.template.html',
            styleUrls: ['app/app.styles.css']
        }),
        __metadata("design:paramtypes", [events_service_1.EventsService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map