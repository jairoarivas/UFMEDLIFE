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
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const Observable_1 = require("rxjs/Observable");
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.user = window['user'];
        this._signinURL = 'api/auth/signin';
        this._signupURL = 'api/auth/signup';
        this._baseURL = 'api/auth/users';
        this._forgotPasswordURL = 'api/forgotPassword';
        this._resetURL = 'api/resetPassword';
    }
    //---------------------authentication------------//
    isLoggedIn() {
        return (!!this.user);
    }
    signin(credentials) {
        let body = JSON.stringify(credentials);
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._signinURL, body, options)
            .map(res => this.user = res.json())
            .catch(this.handleError);
    }
    signup(user) {
        return this.http.post(this._signupURL, user)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    //-----------------------------Crud Module--------------------------//
    read(userId) {
        return this.http
            .get(`${this._baseURL}/${userId}`)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    update(user) {
        return this.http
            .put(`${this._baseURL}/${user._id}`, user)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    delete(userId) {
        return this.http
            .delete(`${this._baseURL}/${userId}`)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    list() {
        return this.http
            .get(this._baseURL)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    //-----------------------------Forgot Password--------------------------//
    forgotPassword(credentials) {
        return this.http.post(this._forgotPasswordURL, credentials)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    resetPassword(credentials) {
        let body = JSON.stringify(credentials);
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(`${this._resetURL}/${credentials.resetPasswordToken}`, body, options)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    readForgotPassword(token) {
        return this.http
            .get(`${this._resetURL}/${token}`)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    handleError(error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().message || 'Server error');
    }
};
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map