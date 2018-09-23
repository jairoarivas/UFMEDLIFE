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
var authentication_service_1 = require("../authentication.service");
var router_1 = require("@angular/router");
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.credentials = {};
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.g = document.getElementById('errorMessage');
        this.g.style.display = 'none';
        this.s = document.getElementById('successMessage');
        this.s.style.display = 'none';
    };
    ForgotPasswordComponent.prototype.forgotPassword = function () {
        var _this = this;
        this.g.style.display = 'none';
        this._authenticationService.forgotPassword(this.credentials).subscribe(function (result) {
            _this.s.style.display = 'none';
            _this.s.style.display = 'block';
            setTimeout(function () {
                _this._router.navigate(['/authentication/signin']);
            }, 3000);
        }, function (error) {
            _this.errorMessage = error;
            _this.g.style.display = 'none';
            _this.g.style.display = 'block';
        });
    };
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            selector: 'forgotPassword',
            templateUrl: './app/authentication/forgotPassword/forgotPassword.template.html',
            styleUrls: ['app/app.styles.css']
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=forgotPassword.component.js.map