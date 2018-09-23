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
let AffairsService = class AffairsService {
    constructor(_http) {
        this._http = _http;
        this._baseURL = 'api/affairs';
        this._codeURL = 'api/affairCode';
    }
    create(affair) {
        return this._http
            .post(this._baseURL, affair)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    read(affairId) {
        return this._http
            .get(`${this._baseURL}/${affairId}`)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    readCode(affairCode) {
        return this._http
            .get(`${this._codeURL}/${affairCode}`)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    update(affair) {
        return this._http
            .put(`${this._baseURL}/${affair._id}`, affair)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    delete(affairId) {
        return this._http
            .delete(`${this._baseURL}/${affairId}`)
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
AffairsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AffairsService);
exports.AffairsService = AffairsService;
//# sourceMappingURL=affairs.service.js.map