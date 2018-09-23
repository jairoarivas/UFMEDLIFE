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
const authentication_service_1 = require("../../authentication/authentication.service");
const pointRequests_service_1 = require("../pointRequests.service");
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
    filterByName() {
        this.filterBy = 'name';
    }
    filterByValue() {
        this.filterBy = 'value';
    }
    filterByDate() {
        this.filterBy = 'date';
    }
    filterByCode() {
        this.filterBy = 'user';
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