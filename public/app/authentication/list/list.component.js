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
var ListComponent = /** @class */ (function () {
    function ListComponent(_router, _route, _authenticationService) {
        var _this = this;
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._authenticationService.list().subscribe(function (members) { return _this.members = members; });
        this.user = this._authenticationService.user;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.filterBy = 'firstName';
    };
    ListComponent.prototype.filterByRole = function () {
        this.filterBy = 'role';
    };
    ListComponent.prototype.filterByfirstName = function () {
        this.filterBy = 'firstName';
    };
    ListComponent.prototype.filterBylastName = function () {
        this.filterBy = 'lastName';
    };
    ListComponent.prototype.filterByEmail = function () {
        this.filterBy = 'email';
    };
    ListComponent.prototype.filterByPoints = function () {
        this.filterBy = 'points';
    };
    ListComponent.prototype.deleteModal = function (m) {
        // console.log("delete button clicked");
        // console.log(m);
        this.currentMember = m;
    };
    ListComponent.prototype.delete = function () {
        var _this = this;
        this._authenticationService.delete(this.currentMember._id).subscribe(function (deletedUser) {
            _this._authenticationService.list().subscribe(function (members) { return _this.members = members; });
            _this.currentMember = undefined;
        }, function (error) { return _this.errorMessage = error; });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'list',
            templateUrl: 'app/authentication/list/list.template.html',
            styleUrls: ['app/app.styles.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, authentication_service_1.AuthenticationService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map