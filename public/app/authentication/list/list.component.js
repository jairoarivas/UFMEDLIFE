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
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const authentication_service_1 = require("../authentication.service");
let ListComponent = class ListComponent {
    constructor(_router, _route, _authenticationService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._authenticationService.list().subscribe(members => this.members = members);
        this.user = this._authenticationService.user;
    }
    ngOnInit() {
        this.filterBy = 'role';
    }
    filterByRole() {
        this.filterBy = 'role';
    }
    filterByfirstName() {
        this.filterBy = 'firstName';
    }
    filterBylastName() {
        this.filterBy = 'lastName';
    }
    filterByEmail() {
        this.filterBy = 'email';
    }
    filterByPoints() {
        this.filterBy = 'points';
    }
    isAuthorized() {
        if (this._authenticationService.user.role === 'Admin') {
            return true;
        }
        else {
            return false;
        }
    }
    deleteModal(m) {
        // console.log("delete button clicked");
        // console.log(m);
        this.currentMember = m;
    }
    memberViewPage(member) {
        this._router.navigate(['/authentication/members', member]);
    }
    delete() {
        this._authenticationService.delete(this.currentMember._id).subscribe(deletedUser => {
            this._authenticationService.list().subscribe(members => this.members = members);
            this.currentMember = undefined;
        }, error => this.errorMessage = error);
    }
};
ListComponent = __decorate([
    core_1.Component({
        selector: 'list',
        templateUrl: 'app/authentication/list/list.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, authentication_service_1.AuthenticationService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map