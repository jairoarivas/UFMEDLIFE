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
var authentication_service_1 = require("../authentication.service");
var members_service_1 = require("../members.service");
var ViewComponent = /** @class */ (function () {
    function ViewComponent(_router, _route, _authenticationService, _membersService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._membersService = _membersService;
        this.allowEdit = false;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._authenticationService.user;
        this.routingObserver = this._route.params.subscribe(function (params) {
            var userId = params['userId'];
            _this._membersService
                .read(userId)
                .subscribe(function (member) {
                _this.member = member;
                _this.allowEdit = (_this.user && _this.user.role === 'Admin');
            }, function (error) { return _this._router.navigate(['/authentication/members']); });
        });
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        this.routingObserver.unsubscribe();
    };
    ViewComponent.prototype.delete = function () {
        var _this = this;
        this._membersService.delete(this.member._id).subscribe(function (deletedUser) { return _this._router.navigate(['/authentication/members']); }, function (error) { return _this.errorMessage = error; });
    };
    ViewComponent = __decorate([
        core_1.Component({
            selector: 'view',
            templateUrl: 'app/authentication/view/view.template.html',
            styleUrls: ['app/app.styles.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            authentication_service_1.AuthenticationService, members_service_1.MembersService])
    ], ViewComponent);
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view.component.js.map