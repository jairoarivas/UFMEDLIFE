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
const members_service_1 = require("../members.service");
const eggs_service_1 = require("../../eggs/eggs.service");
const authentication_service_1 = require("../authentication.service");
let AddPointComponent = class AddPointComponent {
    constructor(_router, _route, _membersService, _eggsService, _authenticationService) {
        this._router = _router;
        this._route = _route;
        this._membersService = _membersService;
        this._eggsService = _eggsService;
        this._authenticationService = _authenticationService;
        this.member = {};
        this.allowEdit = false;
        this.selected = function (egg) {
            return (this.member.tempEgg === egg);
        };
    }
    ngOnInit() {
        this.user = this._authenticationService.user;
        this.paramsObserver = this._route.params.subscribe(params => {
            let userId = params['userId'];
            this._membersService.read(userId).subscribe(member => {
                this.allowEdit = (this.user && (this.user.role === 'Admin' || this.user.role === 'Officer'));
                this.member = member;
            }, error => this._router.navigate(['/authentication/addPoint']));
            this._eggsService.list().subscribe(eggs => this.eggs = eggs);
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    temp(egg) {
        this.member.tempEgg = egg;
    }
    addPoint() {
        this._membersService.addPoint(this.member).subscribe(savedUser => this._router.navigate(['/authentication/addPoint']), error => this.errorMessage = error);
    }
    removePoint() {
        this._membersService.removePoint(this.member).subscribe(savedUser => this._router.navigate(['/authentication/addPoint']), error => this.errorMessage = error);
    }
};
AddPointComponent = __decorate([
    core_1.Component({
        selector: 'addPoint',
        templateUrl: 'app/authentication/addPoint/addPoint.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        members_service_1.MembersService,
        eggs_service_1.EggsService, authentication_service_1.AuthenticationService])
], AddPointComponent);
exports.AddPointComponent = AddPointComponent;
//# sourceMappingURL=addPoint.component.js.map