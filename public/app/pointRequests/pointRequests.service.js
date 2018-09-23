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
const Observable_1 = require("rxjs/Observable");
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
let PointRequestsService = class PointRequestsService {
    constructor(_http) {
        this._http = _http;
        this._baseURL = 'api/pointRequests';
        this._checkURL = 'api/pointRequestCheck';
    }
    create(pointRequest) {
        return this._http
            .post(this._baseURL, pointRequest)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    read(pointRequestId) {
        return this._http
            .get(`${this._baseURL}/${pointRequestId}`)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    checkRequest(eventName, member) {
        return this._http
            .get(`${this._checkURL}/${eventName}/${member._id}`)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    update(pointRequest) {
        return this._http
            .put(`${this._baseURL}/${pointRequest._id}`, pointRequest)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    delete(pointRequestId) {
        return this._http
            .delete(`${this._baseURL}/${pointRequestId}`)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    list() {
        return this._http
            .get(this._baseURL)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    handleError(error) {
        return Observable_1.Observable.throw(error.json().message || 'Server error');
    }
};
PointRequestsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PointRequestsService);
exports.PointRequestsService = PointRequestsService;
//# sourceMappingURL=pointRequests.service.js.map