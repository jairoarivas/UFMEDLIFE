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
var router_1 = require("@angular/router");
var events_service_1 = require("../events.service");
var EditComponent = /** @class */ (function () {
    function EditComponent(_router, _route, _eventsService) {
        this._router = _router;
        this._route = _route;
        this._eventsService = _eventsService;
        this.event = {};
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsObserver = this._route.params.subscribe(function (params) {
            var eventId = params['eventId'];
            _this._eventsService.read(eventId).subscribe(function (event) {
                _this.event = event;
            }, function (error) { return _this._router.navigate(['/events']); });
        });
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.paramsObserver.unsubscribe();
    };
    EditComponent.prototype.update = function () {
        var _this = this;
        this._eventsService.update(this.event).subscribe(function (savedEvent) { return _this._router.navigate(['/events', savedEvent._id]); }, function (error) { return _this.errorMessage = error; });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'edit',
            templateUrl: 'app/events/edit/edit.template.html',
            styleUrls: ['app/app.styles.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            events_service_1.EventsService])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map