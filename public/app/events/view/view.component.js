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
var authentication_service_1 = require("../../authentication/authentication.service");
var events_service_1 = require("../events.service");
var ViewComponent = /** @class */ (function () {
    function ViewComponent(_router, _route, _authenticationService, _eventsService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._eventsService = _eventsService;
        this.allowEdit = false;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._authenticationService.user;
        this.routingObserver = this._route.params.subscribe(function (params) {
            var eventId = params['eventId'];
            _this._eventsService
                .read(eventId)
                .subscribe(function (event) {
                _this.event = event;
                _this.allowEdit = (_this.user && _this.user._id === _this.event.creator._id);
            }, function (error) { return _this._router.navigate(['/events']); });
        });
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        this.routingObserver.unsubscribe();
    };
    ViewComponent.prototype.delete = function () {
        var _this = this;
        this._eventsService.delete(this.event._id).subscribe(function (deletedEvent) { return _this._router.navigate(['/events']); }, function (error) { return _this.errorMessage = error; });
    };
    ViewComponent = __decorate([
        core_1.Component({
            selector: 'view',
            templateUrl: 'app/events/view/view.template.html',
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            authentication_service_1.AuthenticationService,
            events_service_1.EventsService])
    ], ViewComponent);
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view.component.js.map