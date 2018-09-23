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
const authentication_service_1 = require("../authentication/authentication.service");
const router_1 = require("@angular/router");
let HeaderComponent = class HeaderComponent {
    //injecting authenticationService into header component. This allows the access to user information.
    constructor(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.user = _authenticationService.user;
        //console.log(!!this.user);
    }
    ngOnInit() {
        this.wasClicked = false;
        this.dropped = false;
        this.g = document.getElementsByClassName('restOfSite');
        this.c = document.getElementsByClassName('clicked');
        if (this.c.length > 0) {
            for (var i = 0; i < this.g.length; i++) {
                this.g[i].style.display = 'none';
            }
        }
        else {
            for (var i = 0; i < this.g.length; i++) {
                this.g[i].style.display = 'block';
            }
        }
        this.d = document.getElementById('dropDown');
        this.d.style.display = 'none';
    }
    openAccount() {
        this.c = document.getElementsByClassName('clicked');
        for (var i = 0; i < this.c.length; i++) {
            this.c[i].classList.remove('clicked');
        }
        this.wasClicked = false;
        this._router.navigate(['/authentication/members', this._authenticationService.user._id]);
    }
    navMenuCheck() {
        this.c = document.getElementsByClassName('clicked');
        for (var i = 0; i < this.c.length; i++) {
            this.c[i].classList.remove('clicked');
        }
        this.wasClicked = false;
    }
    clicker(event) {
        if (this.wasClicked) {
            this.wasClicked = false;
            event.currentTarget.classList.remove('clicked');
            for (var i = 0; i < this.g.length; i++) {
                this.g[i].style.display = 'block';
            }
        }
        else {
            event.currentTarget.classList.add('clicked');
            for (var i = 0; i < this.g.length; i++) {
                this.g[i].style.display = 'none';
            }
            this.wasClicked = true;
        }
    }
    dropDown(event) {
        if (this.dropped) {
            this.dropped = false;
            //event.currentTarget.classList.remove('dropped');
            this.d.style.display = 'none';
        }
        else {
            //event.currentTarget.classList.add('dropped');
            this.d.style.display = 'block';
            this.dropped = true;
        }
    }
};
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'header',
        templateUrl: './app/header/header.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map