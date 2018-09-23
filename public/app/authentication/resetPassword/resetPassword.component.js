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
let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(_router, _route, _authenticationService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this.user = {};
    }
    ngOnInit() {
        this.g = document.getElementById('errorMessage');
        this.g.style.display = 'none';
        this.s = document.getElementById('successMessage');
        this.s.style.display = 'none';
        this.paramsObserver = this._route.params.subscribe(params => {
            let token = params['token'];
            this._authenticationService.readForgotPassword(token).subscribe(user => {
                this.user = user;
            }, error => this._router.navigate(['/authentication/forgotPassword']));
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    resetPassword() {
        this.g.style.display = 'none';
        this._authenticationService.resetPassword(this.user).subscribe(savedUser => {
            this.s.style.display = 'none';
            this.s.style.display = 'block';
            setTimeout(() => {
                this._router.navigate(['/authentication/signin']);
            }, 2000);
        }, error => {
            this.g.style.display = 'none';
            this.g.style.display = 'block';
            this.errorMessage = error;
        });
    }
};
ResetPasswordComponent = __decorate([
    core_1.Component({
        selector: 'resetPassword',
        templateUrl: 'app/authentication/resetPassword/resetPassword.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService])
], ResetPasswordComponent);
exports.ResetPasswordComponent = ResetPasswordComponent;
//# sourceMappingURL=resetPassword.component.js.map