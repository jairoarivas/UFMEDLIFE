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
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(_router, _route, _authenticationService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this.user = {};
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsObserver = this._route.params.subscribe(function (params) {
            var token = params['token'];
            _this._authenticationService.read(token).subscribe(function (user) {
                _this.user = user;
            }, function (error) { return _this._router.navigate(['/authentication/forgotPassword']); });
        });
    };
    ResetPasswordComponent.prototype.ngOnDestroy = function () {
        this.paramsObserver.unsubscribe();
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        this._authenticationService.resetPassword(this.user).subscribe(function (savedUser) { return _this._router.navigate(['/itReset']); }, function (error) { return _this.errorMessage = error; });
    };
    ResetPasswordComponent = __decorate([
        core_1.Component({
            selector: 'resetPassword',
            templateUrl: 'app/authentication/resetPassword/resetPassword.template.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            authentication_service_1.AuthenticationService])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
exports.ResetPasswordComponent = ResetPasswordComponent;
//# sourceMappingURL=resetPassword.component.js.map