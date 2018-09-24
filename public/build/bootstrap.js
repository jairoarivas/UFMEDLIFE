webpackJsonp([1],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(3);
const authentication_service_1 = __webpack_require__(24);
const router_1 = __webpack_require__(16);
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
    isAuthorized() {
        console.log(this._authenticationService.user);
        if (this._authenticationService.user.role === 'Admin') {
            return true;
        }
        else {
            return false;
        }
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
        for (var i = 0; i < this.g.length; i++) {
            this.g[i].style.display = 'block';
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

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PipeModule_1;
const core_1 = __webpack_require__(3);
const filter_pipe_1 = __webpack_require__(776);
const filterEvents_pipe_1 = __webpack_require__(777);
const orderBy_pipe_1 = __webpack_require__(778);
const orderByValue_pipe_1 = __webpack_require__(779);
const orderByDate_pipe_1 = __webpack_require__(780);
const dateFormat_pipe_1 = __webpack_require__(781);
const filterRequests_pipe_1 = __webpack_require__(782);
let PipeModule = PipeModule_1 = class PipeModule {
    static forRoot() {
        return {
            ngModule: PipeModule_1,
            providers: [],
        };
    }
};
PipeModule = PipeModule_1 = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [filter_pipe_1.FilterPipe, orderBy_pipe_1.SortPipe, orderByValue_pipe_1.NumberSortPipe, dateFormat_pipe_1.customDateFormatPipe, orderByDate_pipe_1.DateSortPipe, filterEvents_pipe_1.FilterEventsPipe, filterRequests_pipe_1.FilterRequestsPipe],
        exports: [filter_pipe_1.FilterPipe, orderBy_pipe_1.SortPipe, orderByValue_pipe_1.NumberSortPipe, dateFormat_pipe_1.customDateFormatPipe, orderByDate_pipe_1.DateSortPipe, filterEvents_pipe_1.FilterEventsPipe, filterRequests_pipe_1.FilterRequestsPipe],
    })
], PipeModule);
exports.PipeModule = PipeModule;
//# sourceMappingURL=filter.module.js.map

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

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
__webpack_require__(100);
const core_1 = __webpack_require__(3);
const http_1 = __webpack_require__(73);
const Observable_1 = __webpack_require__(0);
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.user = window['user'];
        this._signinURL = 'api/auth/signin';
        this._signupURL = 'api/auth/signup';
        this._baseURL = 'api/auth/users';
        this._forgotPasswordURL = 'api/forgotPassword';
        this._resetURL = 'api/resetPassword';
    }
    //---------------------authentication------------//
    isLoggedIn() {
        return (!!this.user);
    }
    signin(credentials) {
        let body = JSON.stringify(credentials);
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._signinURL, body, options)
            .map(res => this.user = res.json())
            .catch(this.handleError);
    }
    signup(user) {
        return this.http.post(this._signupURL, user)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    //-----------------------------Crud Module--------------------------//
    read(userId) {
        return this.http
            .get(`${this._baseURL}/${userId}`)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    update(user) {
        return this.http
            .put(`${this._baseURL}/${user._id}`, user)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    addPoints(user) {
        return this.http
            .put(`${this._baseURL}/${user._id}`, user)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    delete(userId) {
        return this.http
            .delete(`${this._baseURL}/${userId}`)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    list() {
        return this.http
            .get(this._baseURL)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    //-----------------------------Forgot Password--------------------------//
    forgotPassword(credentials) {
        return this.http.post(this._forgotPasswordURL, credentials)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    resetPassword(credentials) {
        let body = JSON.stringify(credentials);
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(`${this._resetURL}/${credentials.resetPasswordToken}`, body, options)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    readForgotPassword(token) {
        return this.http
            .get(`${this._resetURL}/${token}`)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    handleError(error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().message || 'Server error');
    }
};
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './app/home/home.template.html',
        styleUrls: ['app/app.styles.css']
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
let contactUsComponent = class contactUsComponent {
};
contactUsComponent = __decorate([
    core_1.Component({
        selector: 'contactUs',
        templateUrl: './app/contactUs/contactUs.template.html',
        styleUrls: ['app/app.styles.css']
    })
], contactUsComponent);
exports.contactUsComponent = contactUsComponent;
//# sourceMappingURL=contactUs.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
let AuthenticationComponent = class AuthenticationComponent {
};
AuthenticationComponent = __decorate([
    core_1.Component({
        selector: 'authentication',
        templateUrl: 'app/authentication/authentication.template.html',
    })
], AuthenticationComponent);
exports.AuthenticationComponent = AuthenticationComponent;
//# sourceMappingURL=authentication.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(3);
const router_1 = __webpack_require__(16);
const authentication_service_1 = __webpack_require__(24);
let SigninComponent = class SigninComponent {
    constructor(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.credentials = {};
    }
    ngOnInit() {
        this.g = document.getElementById('errorMessage');
        this.g.style.display = 'none';
    }
    signin() {
        this.g.style.display = 'none';
        this._authenticationService.signin(this.credentials).subscribe(result => this._router.navigate(['/authentication/members', this._authenticationService.user._id]), error => {
            this.errorMessage = error;
            this.g.style.display = 'none';
            this.g.style.display = 'block';
        });
    }
};
SigninComponent = __decorate([
    core_1.Component({
        selector: 'SignIn',
        templateUrl: 'app/authentication/signin/signin.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
], SigninComponent);
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(3);
const router_1 = __webpack_require__(16);
const authentication_service_1 = __webpack_require__(24);
let SignupComponent = class SignupComponent {
    constructor(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.user = {};
        //roles = ['Admin', 'Officer', 'Member'];
        this.showPassword = false;
    }
    ngOnInit() {
        this.g = document.getElementById('errorMessage');
        this.g.style.display = 'none';
        this.s = document.getElementById('successMessage');
        this.s.style.display = 'none';
    }
    signup() {
        this.g.style.display = 'none';
        this._authenticationService.signup(this.user).subscribe(result => {
            this.s.style.display = 'none';
            this.s.style.display = 'block';
            setTimeout(() => {
                this._router.navigate(['/authentication/signin']);
            }, 1500);
        }, error => {
            this.errorMessage = error;
            this.g.style.display = 'none';
            this.g.style.display = 'block';
        });
    }
};
SignupComponent = __decorate([
    core_1.Component({
        selector: 'signup',
        templateUrl: 'app/authentication/signup/signup.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
], SignupComponent);
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(3);
const router_1 = __webpack_require__(16);
const authentication_service_1 = __webpack_require__(24);
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

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(3);
const router_1 = __webpack_require__(16);
const authentication_service_1 = __webpack_require__(24);
const affairs_service_1 = __webpack_require__(82);
const pointRequests_service_1 = __webpack_require__(83);
let ViewComponent = class ViewComponent {
    constructor(_router, _route, _authenticationService, _affairsService, _pointRequestsService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._affairsService = _affairsService;
        this._pointRequestsService = _pointRequestsService;
        this.member = {};
        //point request related variables
        this.affair = {};
        this.pointRequest = {};
        this.user = this._authenticationService.user;
        this._authenticationService.list().subscribe(members => {
            this.count = members.length;
            this.members = members;
        });
    }
    ngOnInit() {
        this.g = document.getElementById('errorMessage');
        this.g.style.display = 'none';
        this.s = document.getElementById('successMessage');
        this.s.style.display = 'none';
        this.paramsObserver = this._route.params.subscribe(params => {
            let userId = params['userId'];
            this._authenticationService
                .read(userId)
                .subscribe(member => {
                this.member = member;
                this._authenticationService.list().subscribe(members => this.members = members);
            }, error => this._router.navigate(['/']));
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    createRequest() {
        var alreadyRequested = false;
        //console.log(this.member.attendedEvents.length);
        //console.log(this.member.attendedEvents[0].eventName);
        //console.log(this.affair.affairName);
        for (var i = 0; i < this.member.attendedEvents.length; i++) {
            if (this.member.attendedEvents[i].eventName === this.affair.affairName) {
                alreadyRequested = true;
            }
        }
        //console.log('AlreadyRequested: ' + alreadyRequested);
        if (alreadyRequested) {
            this.errorMessage = 'You have already recieved points for this event';
            this.g.style.display = 'none';
            this.g.style.display = 'block';
            setTimeout(() => {
                this.g.style.display = 'none';
            }, 5000);
        }
        else {
            this._pointRequestsService.checkRequest(this.affair.affairName.replace(/\s+/g, ''), this.member).subscribe(requests => {
                //console.log(requests);
                if (requests.length > 0) {
                    this.errorMessage = 'Your previous request for this event is still being approved';
                    this.g.style.display = 'none';
                    this.g.style.display = 'block';
                    setTimeout(() => {
                        this.g.style.display = 'none';
                    }, 5000);
                }
                else {
                    this.pointRequest = {
                        pointRequestUser: this.member,
                        pointRequestName: this.affair.affairName,
                        pointRequestValue: this.affair.affairValue,
                        pointRequestDate: this.affair.affairDate
                    };
                    this._pointRequestsService.create(this.pointRequest).subscribe(result => {
                        this.s.style.display = 'none';
                        this.s.style.display = 'block';
                        setTimeout(() => {
                            this.s.style.display = 'none';
                        }, 5000);
                    }, error => {
                        this.errorMessage = 'Unable to send request';
                        this.g.style.display = 'none';
                        this.g.style.display = 'block';
                        setTimeout(() => {
                            this.g.style.display = 'none';
                        }, 5000);
                    });
                }
            }, error => {
                this.errorMessage = error;
                this.g.style.display = 'none';
                this.g.style.display = 'block';
                setTimeout(() => {
                    this.g.style.display = 'none';
                }, 5000);
            });
        }
    }
    findAffair() {
        this.s.style.display = 'none';
        this.g.style.display = 'none';
        this._affairsService.readCode(this.affairCodeRequest).subscribe(affair => {
            this.affair = affair;
        }, error => {
            this.errorMessage = 'There is no event with that event code';
            this.g.style.display = 'none';
            this.g.style.display = 'block';
            setTimeout(() => {
                this.g.style.display = 'none';
            }, 5000);
        }, () => {
            //console.log(this.affair);
            this.createRequest();
        });
    }
    percentile() {
        var totalMembers = 0;
        var numberUnderMember = 0;
        var numPoints = this.member.points;
        for (var i = 0; i < this.count; i++) {
            //console.log(numPoints);
            if (numPoints > this.members[i].points) {
                numberUnderMember++;
            }
            //console.log(totalMembers);
            totalMembers++;
        }
        //console.log(numberUnderMember);
        //console.log(totalMembers);
        return Math.floor(((numberUnderMember / totalMembers) * 100));
    }
    EventsAttendedEmpty() {
        if (this.member.attendedEvents !== undefined) {
            if (this.member.attendedEvents.length > 0) {
                return false;
            }
            else {
                return true;
            }
        }
    }
};
ViewComponent = __decorate([
    core_1.Component({
        selector: 'view',
        templateUrl: 'app/authentication/view/view.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, authentication_service_1.AuthenticationService, affairs_service_1.AffairsService, pointRequests_service_1.PointRequestsService])
], ViewComponent);
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(3);
const router_1 = __webpack_require__(16);
const authentication_service_1 = __webpack_require__(24);
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

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(3);
const authentication_service_1 = __webpack_require__(24);
const router_1 = __webpack_require__(16);
let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.credentials = {};
    }
    ngOnInit() {
        this.g = document.getElementById('errorMessage');
        this.g.style.display = 'none';
        this.s = document.getElementById('successMessage');
        this.s.style.display = 'none';
    }
    forgotPassword() {
        this.g.style.display = 'none';
        this._authenticationService.forgotPassword(this.credentials).subscribe(result => {
            this.s.style.display = 'none';
            this.s.style.display = 'block';
            setTimeout(() => {
                this._router.navigate(['/authentication/signin']);
            }, 3000);
        }, error => {
            this.errorMessage = error;
            this.g.style.display = 'none';
            this.g.style.display = 'block';
        });
    }
};
ForgotPasswordComponent = __decorate([
    core_1.Component({
        selector: 'forgotPassword',
        templateUrl: './app/authentication/forgotPassword/forgotPassword.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
], ForgotPasswordComponent);
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=forgotPassword.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(3);
const router_1 = __webpack_require__(16);
const authentication_service_1 = __webpack_require__(24);
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

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
let getInvolvedComponent = class getInvolvedComponent {
};
getInvolvedComponent = __decorate([
    core_1.Component({
        selector: 'getInvolved',
        template: '<router-outlet></router-outlet>',
        styleUrls: ['app/app.styles.css']
    })
], getInvolvedComponent);
exports.getInvolvedComponent = getInvolvedComponent;
//# sourceMappingURL=getInvolved.component.js.map

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
let becomeAMemberComponent = class becomeAMemberComponent {
};
becomeAMemberComponent = __decorate([
    core_1.Component({
        selector: 'becomeAMember',
        templateUrl: 'app/getInvolved/becomeAMember/becomeAMember.template.html',
        styleUrls: ['app/app.styles.css']
    })
], becomeAMemberComponent);
exports.becomeAMemberComponent = becomeAMemberComponent;
//# sourceMappingURL=becomeAMember.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
let alreadyAMemberComponent = class alreadyAMemberComponent {
};
alreadyAMemberComponent = __decorate([
    core_1.Component({
        selector: 'alreadyAMember',
        templateUrl: 'app/getInvolved/alreadyAMember/alreadyAMember.template.html',
        styleUrls: ['app/app.styles.css']
    })
], alreadyAMemberComponent);
exports.alreadyAMemberComponent = alreadyAMemberComponent;
//# sourceMappingURL=alreadyAMember.component.js.map

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
let serviceTripsComponent = class serviceTripsComponent {
};
serviceTripsComponent = __decorate([
    core_1.Component({
        selector: 'serviceTrips',
        templateUrl: 'app/getInvolved/serviceTrips/serviceTrips.template.html',
        styleUrls: ['app/app.styles.css']
    })
], serviceTripsComponent);
exports.serviceTripsComponent = serviceTripsComponent;
//# sourceMappingURL=serviceTrips.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
let PointRequestsComponent = class PointRequestsComponent {
};
PointRequestsComponent = __decorate([
    core_1.Component({
        selector: 'pointRequests',
        template: '<router-outlet></router-outlet>'
    })
], PointRequestsComponent);
exports.PointRequestsComponent = PointRequestsComponent;
//# sourceMappingURL=pointRequests.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(3);
const router_1 = __webpack_require__(16);
const pointRequests_service_1 = __webpack_require__(83);
let CreateComponent = class CreateComponent {
    constructor(_router, _pointRequestsService) {
        this._router = _router;
        this._pointRequestsService = _pointRequestsService;
        this.pointRequest = {};
    }
    ngOnInit() {
        this.g = document.getElementById('errorMessage');
        this.g.style.display = 'none';
        this.s = document.getElementById('successMessage');
        this.s.style.display = 'none';
    }
    create() {
        this.pointRequest.pointRequestName = this.pointRequest.pointRequestName.replace(/\s+/g, '');
        this._pointRequestsService.create(this.pointRequest).subscribe(createdPointRequest => {
            this.s.style.display = 'none';
            this.s.style.display = 'block';
            setTimeout(() => {
                this._router.navigate(['/pointRequests']);
            }, 1500);
        }, error => {
            this.errorMessage = error;
            this.g.style.display = 'none';
            this.g.style.display = 'block';
        });
    }
};
CreateComponent = __decorate([
    core_1.Component({
        selector: 'create',
        templateUrl: 'app/pointRequests/create/create.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        pointRequests_service_1.PointRequestsService])
], CreateComponent);
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(3);
const authentication_service_1 = __webpack_require__(24);
const pointRequests_service_1 = __webpack_require__(83);
let ListComponent = class ListComponent {
    constructor(_pointRequestsService, _authenticationService) {
        this._pointRequestsService = _pointRequestsService;
        this._authenticationService = _authenticationService;
        this.memberRequestingPoints = {};
        this._pointRequestsService.list().subscribe(pointRequests => this.pointRequests = pointRequests);
        this.filterBy = 'date';
    }
    ngOnInit() {
        this.g = document.getElementById('errorMessage');
        this.g.style.display = 'none';
        this.s = document.getElementById('successMessage');
        this.s.style.display = 'none';
        this._pointRequestsService.list().subscribe(pointRequests => this.pointRequests = pointRequests);
    }
    isAuthorized() {
        if (this._authenticationService.user.role === 'Admin') {
            return true;
        }
        else {
            return false;
        }
    }
    filterByName() {
        this.filterBy = 'name';
    }
    filterByValue() {
        this.filterBy = 'value';
    }
    filterByDate() {
        this.filterBy = 'date';
    }
    filterByUser() {
        this.filterBy = 'user';
    }
    filterByEmail() {
        this.filterBy = 'email';
    }
    deleteModal(m) {
        this.s.style.display = 'none';
        this.g.style.display = 'none';
        this.currentPointRequest = m;
    }
    approveModal(pointRequest) {
        this.s.style.display = 'none';
        this.g.style.display = 'none';
        this.currentPointRequest = pointRequest;
    }
    delete() {
        this._pointRequestsService.delete(this.currentPointRequest._id).subscribe(deletedPointRequest => {
            this._pointRequestsService.list().subscribe(pointRequests => this.pointRequests = pointRequests);
            this.currentPointRequest = undefined;
        }, error => this.errorMessage = error);
    }
    approve() {
        this._authenticationService.read(this.currentPointRequest.pointRequestUser._id).subscribe(member => {
            this.memberRequestingPoints = member;
            //console.log(this.memberRequestingPoints);
            this.memberRequestingPoints.points += this.currentPointRequest.pointRequestValue;
            this.eventToPush = {
                eventName: this.currentPointRequest.pointRequestName,
                eventValue: this.currentPointRequest.pointRequestValue,
                eventDate: this.currentPointRequest.pointRequestDate
            };
            this.memberRequestingPoints.attendedEvents.push(this.eventToPush);
            //console.log(this.memberRequestingPoints);
            this._authenticationService.update(this.memberRequestingPoints).subscribe(saveUser => {
                this.s.style.display = 'none';
                this.s.style.display = 'block';
                setTimeout(() => {
                    this.s.style.display = 'none';
                }, 5000);
                this._pointRequestsService.delete(this.currentPointRequest._id).subscribe(deletedPointRequest => {
                    this._pointRequestsService.list().subscribe(pointRequests => this.pointRequests = pointRequests);
                    this.currentPointRequest = undefined;
                }, error => this.errorMessage = error);
            }, error => {
                this.errorMessage = error;
                this.g.style.display = 'none';
                this.g.style.display = 'block';
                setTimeout(() => {
                    this.g.style.display = 'none';
                }, 5000);
            });
        });
    }
};
ListComponent = __decorate([
    core_1.Component({
        selector: 'list',
        templateUrl: 'app/pointRequests/list/list.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [pointRequests_service_1.PointRequestsService, authentication_service_1.AuthenticationService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(3);
const router_1 = __webpack_require__(16);
const pointRequests_service_1 = __webpack_require__(83);
let EditComponent = class EditComponent {
    constructor(_router, _route, _pointRequestsService) {
        this._router = _router;
        this._route = _route;
        this._pointRequestsService = _pointRequestsService;
        this.pointRequest = {};
    }
    ngOnInit() {
        this.g = document.getElementById('errorMessage');
        this.g.style.display = 'none';
        this.s = document.getElementById('successMessage');
        this.s.style.display = 'none';
        this.paramsObserver = this._route.params.subscribe(params => {
            let pointRequestId = params['pointRequestId'];
            this._pointRequestsService.read(pointRequestId).subscribe(pointRequest => {
                this.pointRequest = pointRequest;
            }, error => this._router.navigate(['/pointRequests']));
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    update() {
        this._pointRequestsService.update(this.pointRequest).subscribe(savedPointRequest => {
            this.s.style.display = 'none';
            this.s.style.display = 'block';
            setTimeout(() => {
                this._router.navigate(['/pointRequests']);
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
        templateUrl: 'app/pointRequests/edit/edit.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        pointRequests_service_1.PointRequestsService])
], EditComponent);
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
let AffairsComponent = class AffairsComponent {
};
AffairsComponent = __decorate([
    core_1.Component({
        selector: 'affairs',
        template: '<router-outlet></router-outlet>'
    })
], AffairsComponent);
exports.AffairsComponent = AffairsComponent;
//# sourceMappingURL=affairs.component.js.map

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(3);
const router_1 = __webpack_require__(16);
const authentication_service_1 = __webpack_require__(24);
const affairs_service_1 = __webpack_require__(82);
let CreateComponent = class CreateComponent {
    constructor(_router, _affairsService, _authenticationService) {
        this._router = _router;
        this._affairsService = _affairsService;
        this._authenticationService = _authenticationService;
        this.affair = {};
    }
    isAuthorized() {
        if (this._authenticationService.user.role === 'Admin') {
            return true;
        }
        else {
            return false;
        }
    }
    ngOnInit() {
        this.g = document.getElementById('errorMessage');
        this.g.style.display = 'none';
        this.s = document.getElementById('successMessage');
        this.s.style.display = 'none';
    }
    create() {
        this.affair.affairName = this.affair.affairName.replace(/\s+/g, '');
        this._affairsService.create(this.affair).subscribe(createdAffair => {
            this.s.style.display = 'none';
            this.s.style.display = 'block';
            setTimeout(() => {
                this._router.navigate(['/affairs']);
            }, 1500);
        }, error => {
            this.errorMessage = error;
            this.g.style.display = 'none';
            this.g.style.display = 'block';
        });
    }
};
CreateComponent = __decorate([
    core_1.Component({
        selector: 'create',
        templateUrl: 'app/affairs/create/create.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        affairs_service_1.AffairsService, authentication_service_1.AuthenticationService])
], CreateComponent);
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(3);
const affairs_service_1 = __webpack_require__(82);
const authentication_service_1 = __webpack_require__(24);
let ListComponent = class ListComponent {
    constructor(_affairsService, _authenticationService) {
        this._affairsService = _affairsService;
        this._authenticationService = _authenticationService;
        this._affairsService.list().subscribe(affairs => this.affairs = affairs);
        this.filterBy = 'affairName';
    }
    isAuthorized() {
        if (this._authenticationService.user.role === 'Admin') {
            return true;
        }
        else {
            return false;
        }
    }
    ngOnInit() {
        this._affairsService.list().subscribe(affairs => this.affairs = affairs);
    }
    filterByName() {
        this.filterBy = 'affairName';
    }
    filterByValue() {
        this.filterBy = 'value';
    }
    filterByDate() {
        this.filterBy = 'date';
        //console.log(this.filterBy);
    }
    filterByCode() {
        this.filterBy = 'Code';
    }
    deleteModal(m) {
        //console.log("delete button clicked");
        //console.log(m);
        this.currentAffair = m;
    }
    delete() {
        this._affairsService.delete(this.currentAffair._id).subscribe(deletedAffair => {
            this._affairsService.list().subscribe(affairs => this.affairs = affairs);
            this.currentAffair = undefined;
        }, error => this.errorMessage = error);
    }
};
ListComponent = __decorate([
    core_1.Component({
        selector: 'list',
        templateUrl: 'app/affairs/list/list.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [affairs_service_1.AffairsService, authentication_service_1.AuthenticationService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(3);
const router_1 = __webpack_require__(16);
const authentication_service_1 = __webpack_require__(24);
const affairs_service_1 = __webpack_require__(82);
let EditComponent = class EditComponent {
    constructor(_router, _route, _affairsService, _authenticationService) {
        this._router = _router;
        this._route = _route;
        this._affairsService = _affairsService;
        this._authenticationService = _authenticationService;
        this.affair = {};
    }
    isAuthorized() {
        if (this._authenticationService.user.role === 'Admin') {
            return true;
        }
        else {
            return false;
        }
    }
    ngOnInit() {
        this.g = document.getElementById('errorMessage');
        this.g.style.display = 'none';
        this.s = document.getElementById('successMessage');
        this.s.style.display = 'none';
        this.paramsObserver = this._route.params.subscribe(params => {
            let affairId = params['affairId'];
            this._affairsService.read(affairId).subscribe(affair => {
                this.affair = affair;
            }, error => this._router.navigate(['/affairs']));
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    update() {
        this._affairsService.update(this.affair).subscribe(savedAffair => {
            this.s.style.display = 'none';
            this.s.style.display = 'block';
            setTimeout(() => {
                this._router.navigate(['/affairs']);
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
        templateUrl: 'app/affairs/edit/edit.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        affairs_service_1.AffairsService, authentication_service_1.AuthenticationService])
], EditComponent);
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = __webpack_require__(216);
const app_module_1 = __webpack_require__(771);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
const platform_browser_1 = __webpack_require__(60);
const router_1 = __webpack_require__(16);
const forms_1 = __webpack_require__(71);
const http_1 = __webpack_require__(73);
const common_1 = __webpack_require__(34);
const app_component_1 = __webpack_require__(772);
const app_routes_1 = __webpack_require__(773);
const authentication_service_1 = __webpack_require__(24);
const authentication_module_1 = __webpack_require__(774);
const header_module_1 = __webpack_require__(783);
const pointRequests_service_1 = __webpack_require__(83);
const affairs_service_1 = __webpack_require__(82);
const getInvolved_module_1 = __webpack_require__(785);
const contactUs_component_1 = __webpack_require__(302);
const home_component_1 = __webpack_require__(301);
const pointRequests_module_1 = __webpack_require__(787);
const affairs_module_1 = __webpack_require__(789);
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            authentication_module_1.AuthenticationModule,
            header_module_1.HeaderModule,
            getInvolved_module_1.getInvolvedModule,
            pointRequests_module_1.PointRequestsModule,
            affairs_module_1.AffairsModule,
            forms_1.FormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forRoot(app_routes_1.AppRoutes)
        ],
        declarations: [
            home_component_1.HomeComponent,
            contactUs_component_1.contactUsComponent,
            app_component_1.AppComponent
        ],
        providers: [
            authentication_service_1.AuthenticationService,
            pointRequests_service_1.PointRequestsService,
            affairs_service_1.AffairsService,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'ufmedlife',
        template: `
  <router-outlet name = "header" ></router-outlet>
  <router-outlet></router-outlet>
`
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const home_component_1 = __webpack_require__(301);
const contactUs_component_1 = __webpack_require__(302);
const header_component_1 = __webpack_require__(150);
exports.AppRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: '',
        component: header_component_1.HeaderComponent,
        outlet: 'header',
    },
    {
        path: 'ContactUs',
        component: contactUs_component_1.contactUsComponent
    },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
const forms_1 = __webpack_require__(71);
const router_1 = __webpack_require__(16);
const common_1 = __webpack_require__(34);
const authentication_routes_1 = __webpack_require__(775);
const authentication_component_1 = __webpack_require__(303);
const signin_component_1 = __webpack_require__(304);
const signup_component_1 = __webpack_require__(305);
//crud//
const list_component_1 = __webpack_require__(306);
const view_component_1 = __webpack_require__(307);
const edit_component_1 = __webpack_require__(308);
const forgotPassword_component_1 = __webpack_require__(309);
const resetPassword_component_1 = __webpack_require__(310);
// import { PointListComponent } from './pointList/pointList.component';
// import { AddPointComponent } from './addPoint/addPoint.component';
const filter_module_1 = __webpack_require__(151);
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            filter_module_1.PipeModule.forRoot(),
            router_1.RouterModule.forChild(authentication_routes_1.AuthenticationRoutes),
        ],
        declarations: [
            authentication_component_1.AuthenticationComponent,
            signin_component_1.SigninComponent,
            signup_component_1.SignupComponent,
            list_component_1.ListComponent,
            view_component_1.ViewComponent,
            edit_component_1.EditComponent,
            forgotPassword_component_1.ForgotPasswordComponent,
            resetPassword_component_1.ResetPasswordComponent,
        ]
    })
], AuthenticationModule);
exports.AuthenticationModule = AuthenticationModule;
//# sourceMappingURL=authentication.module.js.map

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const authentication_component_1 = __webpack_require__(303);
const signin_component_1 = __webpack_require__(304);
const signup_component_1 = __webpack_require__(305);
const list_component_1 = __webpack_require__(306);
const view_component_1 = __webpack_require__(307);
const edit_component_1 = __webpack_require__(308);
const forgotPassword_component_1 = __webpack_require__(309);
const resetPassword_component_1 = __webpack_require__(310);
// import { PointListComponent } from './pointList/pointList.component';
// import { AddPointComponent } from './addPoint/addPoint.component';
exports.AuthenticationRoutes = [{
        path: 'authentication',
        component: authentication_component_1.AuthenticationComponent,
        children: [
            { path: 'signin', component: signin_component_1.SigninComponent },
            { path: 'signup', component: signup_component_1.SignupComponent },
            { path: 'members', component: list_component_1.ListComponent },
            { path: 'members/:userId', component: view_component_1.ViewComponent },
            { path: 'members/:userId/edit', component: edit_component_1.EditComponent },
            { path: 'forgotPassword', component: forgotPassword_component_1.ForgotPasswordComponent },
            { path: 'resetPassword/:token', component: resetPassword_component_1.ResetPasswordComponent }
            // { path: 'addPoint', component: PointListComponent },
            // { path: 'addPoint/:userId', component: AddPointComponent }
        ],
    }];
//# sourceMappingURL=authentication.routes.js.map

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
let FilterPipe = 
//filters based in first and last names, and username/email
class FilterPipe {
    transform(items, term) {
        if (term === undefined)
            return items;
        return items.filter(function (items) {
            if (items.firstName.toLowerCase().includes(term.toLowerCase())) {
                return true;
            }
            else if (items.lastName.toLowerCase().includes(term.toLowerCase())) {
                return true;
            }
            else if (items.username.toLowerCase().includes(term.toLowerCase())) {
                return true;
            }
            else {
                return false;
            }
        });
    }
};
FilterPipe = __decorate([
    core_1.Pipe({
        name: 'filter'
    })
    //filters based in first and last names, and username/email
], FilterPipe);
exports.FilterPipe = FilterPipe;
//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
let FilterEventsPipe = 
//filters based in first and last names, and username/email
class FilterEventsPipe {
    transform(items, term) {
        if (term === undefined)
            return items;
        return items.filter(function (items) {
            if (items.affairName.toLowerCase().includes(term.toLowerCase())) {
                return true;
            }
            else if (items.affairCode.toLowerCase().includes(term.toLowerCase())) {
                return true;
            }
            else {
                return false;
            }
        });
    }
};
FilterEventsPipe = __decorate([
    core_1.Pipe({
        name: 'filterEvents'
    })
    //filters based in first and last names, and username/email
], FilterEventsPipe);
exports.FilterEventsPipe = FilterEventsPipe;
//# sourceMappingURL=filterEvents.pipe.js.map

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
let SortPipe = class SortPipe {
    transform(array, args) {
        if (array !== undefined) {
            array.sort((a, b) => {
                if (a[args].toLowerCase() < b[args].toLowerCase()) {
                    return -1;
                }
                else if (a[args].toLowerCase() > b[args].toLowerCase()) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        return array;
    }
};
SortPipe = __decorate([
    core_1.Pipe({
        name: "orderby"
    })
], SortPipe);
exports.SortPipe = SortPipe;
//# sourceMappingURL=orderBy.pipe.js.map

/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
let NumberSortPipe = class NumberSortPipe {
    transform(array, args) {
        if (array !== undefined) {
            array.sort((a, b) => {
                if (a[args] - b[args] < 0) {
                    return 1;
                }
                else if (a[args] - b[args] > 0) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }
        return array;
    }
};
NumberSortPipe = __decorate([
    core_1.Pipe({
        name: "orderByNumber"
    })
], NumberSortPipe);
exports.NumberSortPipe = NumberSortPipe;
//# sourceMappingURL=orderByValue.pipe.js.map

/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
let DateSortPipe = class DateSortPipe {
    transform(array, args) {
        if (array !== undefined) {
            array.sort((a, b) => {
                if (a[args] < b[args]) {
                    return 1;
                }
                else if (a[args] > b[args]) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }
        return array;
    }
};
DateSortPipe = __decorate([
    core_1.Pipe({
        name: "orderByDate"
    })
], DateSortPipe);
exports.DateSortPipe = DateSortPipe;
//# sourceMappingURL=orderByDate.pipe.js.map

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
const common_1 = __webpack_require__(34);
let customDateFormatPipe = class customDateFormatPipe {
    transform(value) {
        var datePipe = new common_1.DatePipe("EST");
        value = datePipe.transform(value, 'MM/dd/yyyy');
        return value;
    }
};
customDateFormatPipe = __decorate([
    core_1.Pipe({
        name: 'customDateFormat',
    })
], customDateFormatPipe);
exports.customDateFormatPipe = customDateFormatPipe;
//# sourceMappingURL=dateFormat.pipe.js.map

/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
let FilterRequestsPipe = 
//filters based in first and last names, and username/email
class FilterRequestsPipe {
    transform(items, term) {
        if (term === undefined)
            return items;
        return items.filter(function (items) {
            if (items.pointRequestName.toLowerCase().includes(term.toLowerCase())) {
                return true;
            }
            else if (items.pointRequestUser.lastName.toLowerCase().includes(term.toLowerCase())) {
                return true;
            }
            else if (items.pointRequestUser.firstName.toLowerCase().includes(term.toLowerCase())) {
                return true;
            }
            else if (items.pointRequestUser.username.toLowerCase().includes(term.toLowerCase())) {
                return true;
            }
            else {
                return false;
            }
        });
    }
};
FilterRequestsPipe = __decorate([
    core_1.Pipe({
        name: 'filterRequests'
    })
    //filters based in first and last names, and username/email
], FilterRequestsPipe);
exports.FilterRequestsPipe = FilterRequestsPipe;
//# sourceMappingURL=filterRequests.pipe.js.map

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
const common_1 = __webpack_require__(34);
const router_1 = __webpack_require__(16);
const header_routes_1 = __webpack_require__(784);
const header_component_1 = __webpack_require__(150);
let HeaderModule = class HeaderModule {
};
HeaderModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(header_routes_1.HeaderRoutes),
        ],
        declarations: [
            header_component_1.HeaderComponent,
        ]
    })
], HeaderModule);
exports.HeaderModule = HeaderModule;
//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const header_component_1 = __webpack_require__(150);
exports.HeaderRoutes = [{
        path: '',
        component: header_component_1.HeaderComponent,
        outlet: 'header',
    }];
//# sourceMappingURL=header.routes.js.map

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
const router_1 = __webpack_require__(16);
const getInvolved_routes_1 = __webpack_require__(786);
const getInvolved_component_1 = __webpack_require__(311);
const becomeAMember_component_1 = __webpack_require__(312);
const alreadyAMember_component_1 = __webpack_require__(313);
const serviceTrips_component_1 = __webpack_require__(314);
let getInvolvedModule = class getInvolvedModule {
};
getInvolvedModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(getInvolved_routes_1.getInvolvedRoutes),
        ],
        declarations: [
            getInvolved_component_1.getInvolvedComponent,
            becomeAMember_component_1.becomeAMemberComponent,
            alreadyAMember_component_1.alreadyAMemberComponent,
            serviceTrips_component_1.serviceTripsComponent,
        ]
    })
], getInvolvedModule);
exports.getInvolvedModule = getInvolvedModule;
//# sourceMappingURL=getInvolved.module.js.map

/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const getInvolved_component_1 = __webpack_require__(311);
const becomeAMember_component_1 = __webpack_require__(312);
const alreadyAMember_component_1 = __webpack_require__(313);
const serviceTrips_component_1 = __webpack_require__(314);
exports.getInvolvedRoutes = [{
        path: 'getInvolved',
        component: getInvolved_component_1.getInvolvedComponent,
        children: [
            { path: 'AboutUs', component: becomeAMember_component_1.becomeAMemberComponent },
            { path: 'Events', component: alreadyAMember_component_1.alreadyAMemberComponent },
            { path: 'ServiceTrips', component: serviceTrips_component_1.serviceTripsComponent },
        ],
    }];
//# sourceMappingURL=getInvolved.routes.js.map

/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
const common_1 = __webpack_require__(34);
const forms_1 = __webpack_require__(71);
const router_1 = __webpack_require__(16);
const pointRequests_routes_1 = __webpack_require__(788);
const pointRequests_component_1 = __webpack_require__(315);
const create_component_1 = __webpack_require__(316);
const list_component_1 = __webpack_require__(317);
const edit_component_1 = __webpack_require__(318);
const filter_module_1 = __webpack_require__(151);
let PointRequestsModule = class PointRequestsModule {
};
PointRequestsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            filter_module_1.PipeModule.forRoot(),
            router_1.RouterModule.forChild(pointRequests_routes_1.PointRequestsRoutes),
        ],
        declarations: [
            pointRequests_component_1.PointRequestsComponent,
            create_component_1.CreateComponent,
            list_component_1.ListComponent,
            edit_component_1.EditComponent,
        ]
    })
], PointRequestsModule);
exports.PointRequestsModule = PointRequestsModule;
//# sourceMappingURL=pointRequests.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const pointRequests_component_1 = __webpack_require__(315);
const create_component_1 = __webpack_require__(316);
const list_component_1 = __webpack_require__(317);
const edit_component_1 = __webpack_require__(318);
exports.PointRequestsRoutes = [{
        path: 'pointRequests',
        component: pointRequests_component_1.PointRequestsComponent,
        children: [
            { path: '', component: list_component_1.ListComponent },
            { path: 'create', component: create_component_1.CreateComponent },
            { path: ':pointRequestId/edit', component: edit_component_1.EditComponent }
        ]
    }];
//# sourceMappingURL=pointRequests.routes.js.map

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(3);
const common_1 = __webpack_require__(34);
const forms_1 = __webpack_require__(71);
const router_1 = __webpack_require__(16);
const affairs_routes_1 = __webpack_require__(790);
const affairs_component_1 = __webpack_require__(319);
const create_component_1 = __webpack_require__(320);
const list_component_1 = __webpack_require__(321);
const edit_component_1 = __webpack_require__(322);
const filter_module_1 = __webpack_require__(151);
let AffairsModule = class AffairsModule {
};
AffairsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            filter_module_1.PipeModule.forRoot(),
            router_1.RouterModule.forChild(affairs_routes_1.AffairsRoutes),
        ],
        declarations: [
            affairs_component_1.AffairsComponent,
            create_component_1.CreateComponent,
            list_component_1.ListComponent,
            edit_component_1.EditComponent,
        ]
    })
], AffairsModule);
exports.AffairsModule = AffairsModule;
//# sourceMappingURL=affairs.module.js.map

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const affairs_component_1 = __webpack_require__(319);
const create_component_1 = __webpack_require__(320);
const list_component_1 = __webpack_require__(321);
const edit_component_1 = __webpack_require__(322);
exports.AffairsRoutes = [{
        path: 'affairs',
        component: affairs_component_1.AffairsComponent,
        children: [
            { path: '', component: list_component_1.ListComponent },
            { path: 'create', component: create_component_1.CreateComponent },
            { path: ':affairId/edit', component: edit_component_1.EditComponent }
        ]
    }];
//# sourceMappingURL=affairs.routes.js.map

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

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
__webpack_require__(100);
const Observable_1 = __webpack_require__(0);
const core_1 = __webpack_require__(3);
const http_1 = __webpack_require__(73);
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

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

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
__webpack_require__(100);
const Observable_1 = __webpack_require__(0);
const core_1 = __webpack_require__(3);
const http_1 = __webpack_require__(73);
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

/***/ })

},[770]);
//# sourceMappingURL=bootstrap.js.map