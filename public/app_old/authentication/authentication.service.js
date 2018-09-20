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
require("rxjs/Rx");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, ngZone) {
        this.http = http;
        this.ngZone = ngZone;
        this.user = window['user'];
        this._signinURL = 'api/auth/signin';
        this._signupURL = 'api/auth/signup';
        this._forgotPasswordURL = 'api/forgotPassword';
        this._resetURL = 'api/resetPassword';
    }
    AuthenticationService.prototype.isLoggedIn = function () {
        return (!!this.user);
    };
    AuthenticationService.prototype.forgotPassword = function (credentials) {
        var body = JSON.stringify(credentials);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._forgotPasswordURL, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.resetPassword = function (credentials) {
        var body = JSON.stringify(credentials);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._resetURL + "/" + credentials.resetPasswordToken, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.read = function (token) {
        return this.http
            .get(this._resetURL + "/" + token)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.signin = function (credentials) {
        var _this = this;
        var body = JSON.stringify(credentials);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._signinURL, body, options)
            .map(function (res) { return _this.user = res.json(); })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.signup = function (user) {
        return this.http.post(this._signupURL, user)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // refreshUser(): Observable<any> {
    //   return this.http.get('/api/auth/userLoggedIn')
    //   .map((res: Response) => res.json())
    //   .catch(this.handleError)
    // }
    AuthenticationService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().message || 'Server error');
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, core_1.NgZone])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map