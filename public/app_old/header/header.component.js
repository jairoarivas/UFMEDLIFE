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
var authentication_service_1 = require("../authentication/authentication.service");
var router_1 = require("@angular/router");
var HeaderComponent = /** @class */ (function () {
    //injecting authenticationService into header component. This allows the access to user information.
    function HeaderComponent(_authenticationService, _router) {
        var _this = this;
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.user = this._authenticationService.user;
        this.navigationSubscription = this._router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationStart) {
                _this.initialiseInvites();
            }
        });
        //console.log(!!this.user);
        //this._authenticationService.refreshUser().subscribe(result => this.user = result, error => this.errorMessage = error);
    }
    HeaderComponent.prototype.test = function () {
        this._router.navigate([{ outlets: { header: [''] } }]);
    };
    HeaderComponent.prototype.initialiseInvites = function () {
        this.user = this._authenticationService.user;
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.wasClicked = false;
        this.g = document.getElementsByClassName('restOfSite');
        //this.userLoggedIn = false;
        //this.user = this._authenticationService.user;
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    // isLoggedIn(){
    //  console.log(!!this.user);
    //  //this.ngZone.run(() =>{
    //
    //    if(this._authenticationService.isLoggedIn()){
    //      this.userLoggedIn = true;
    //    }
    //    else{
    //      this.userLoggedIn = false;
    //    }
    //  //} );
    //  console.log(this.userLoggedIn);
    //  return this.userLoggedIn;
    // }
    HeaderComponent.prototype.clicker = function (event) {
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
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header',
            templateUrl: './app/header/header.template.html',
            styleUrls: ['app/app.styles.css'],
            providers: [authentication_service_1.AuthenticationService],
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map