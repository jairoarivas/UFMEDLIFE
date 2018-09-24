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
let EditComponent = class EditComponent {
    constructor(_router, _route, _authenticationService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this.member = {};
        this.roles = ['Admin', 'Member'];
        this.user = {};
    }
    ngOnInit() {
        this.g = document.getElementById('errorMessage');
        this.g.style.display = 'none';
        this.s = document.getElementById('successMessage');
        this.s.style.display = 'none';
        this.paramsObserver = this._route.params.subscribe(params => {
            let userId = params['userId'];
            this._authenticationService.read(userId).subscribe(member => {
                this.member = member;
            }, error => this._router.navigate(['/authentication/members']));
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    isAuthorized() {
        this.user = this._authenticationService.user;
        if (this._authenticationService.user.role === 'Admin' || this.user._id === this.member._id) {
            return true;
        }
        else {
            return false;
        }
    }
    update() {
        this._authenticationService.update(this.member).subscribe(savedUser => {
            this.s.style.display = 'none';
            this.s.style.display = 'block';
            setTimeout(() => {
                if (this.member.role === 'Admin') {
                    this._router.navigate(['authentication/members']);
                }
                else {
                    this._router.navigate(['/authentication/members', this._authenticationService.user._id]);
                }
            }, 1500);
        }, error => {
            this.errorMessage = error;
            this.g.style.display = 'none';
            this.g.style.display = 'block';
        });
    }
};
EditComponent = __decorate([
    core_1.Component({
        selector: 'edit',
        templateUrl: 'app/authentication/edit/edit.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService])
], EditComponent);
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map