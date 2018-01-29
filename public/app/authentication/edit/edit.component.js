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
var EditComponent = /** @class */ (function () {
    function EditComponent(_router, _route, _membersService) {
        this._router = _router;
        this._route = _route;
        this._membersService = _membersService;
        this.member = {};
        this.roles = ['Admin', 'Officer', 'Member'];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsObserver = this._route.params.subscribe(function (params) {
            var userId = params['userId'];
            _this._membersService.read(userId).subscribe(function (member) {
                _this.member = member;
            }, function (error) { return _this._router.navigate(['/authentication/members']); });
        });
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.paramsObserver.unsubscribe();
    };
    EditComponent.prototype.update = function () {
        var _this = this;
        this._membersService.update(this.member).subscribe(function (savedUser) { return _this._router.navigate(['authentication/members', savedUser._id]); }, function (error) { return _this.errorMessage = error; });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'edit',
            templateUrl: 'app/authentication/edit/edit.template.html',
            styleUrls: ['app/app.styles.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            members_service_1.MembersService])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map