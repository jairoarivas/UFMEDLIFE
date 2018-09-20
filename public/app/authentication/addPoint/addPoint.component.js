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
var members_service_1 = require("../members.service");
var events_service_1 = require("../../events/events.service");
var authentication_service_1 = require("../authentication.service");
var AddPointComponent = /** @class */ (function () {
    function AddPointComponent(_router, _route, _membersService, _eventsService, _authenticationService) {
        this._router = _router;
        this._route = _route;
        this._membersService = _membersService;
        this._eventsService = _eventsService;
        this._authenticationService = _authenticationService;
        this.member = {};
        this.allowEdit = false;
        this.selected = function (event) {
            return (this.member.tempEvent === event);
        };
    }
    AddPointComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._authenticationService.user;
        this.paramsObserver = this._route.params.subscribe(function (params) {
            var userId = params['userId'];
            _this._membersService.read(userId).subscribe(function (member) {
                _this.allowEdit = (_this.user && (_this.user.role === 'Admin' || _this.user.role === 'Officer'));
                _this.member = member;
            }, function (error) { return _this._router.navigate(['/authentication/addPoint']); });
            _this._eventsService.list().subscribe(function (events) { return _this.events = events; });
        });
    };
    AddPointComponent.prototype.ngOnDestroy = function () {
        this.paramsObserver.unsubscribe();
    };
    AddPointComponent.prototype.temp = function (event) {
        this.member.tempEvent = event;
    };
    AddPointComponent.prototype.addPoint = function () {
        var _this = this;
        this._membersService.addPoint(this.member).subscribe(function (savedUser) { return _this._router.navigate(['/authentication/addPoint']); }, function (error) { return _this.errorMessage = error; });
    };
    AddPointComponent.prototype.removePoint = function () {
        var _this = this;
        this._membersService.removePoint(this.member).subscribe(function (savedUser) { return _this._router.navigate(['/authentication/addPoint']); }, function (error) { return _this.errorMessage = error; });
    };
    AddPointComponent = __decorate([
        core_1.Component({
            selector: 'addPoint',
            templateUrl: 'app/authentication/addPoint/addPoint.template.html',
            styleUrls: ['app/app.styles.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            members_service_1.MembersService,
            events_service_1.EventsService, authentication_service_1.AuthenticationService])
    ], AddPointComponent);
    return AddPointComponent;
}());
exports.AddPointComponent = AddPointComponent;
//# sourceMappingURL=addPoint.component.js.map