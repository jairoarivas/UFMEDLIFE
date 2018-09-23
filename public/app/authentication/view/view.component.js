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
const affairs_service_1 = require("../../affairs/affairs.service");
const pointRequests_service_1 = require("../../pointRequests/pointRequests.service");
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
            if (this.member._id === this.members[i]._id) {
            }
            else {
                //console.log(numPoints);
                if (numPoints >= this.members[i].points) {
                    numberUnderMember++;
                }
                //console.log(totalMembers);
                totalMembers++;
            }
        }
        //console.log(numberUnderMember);
        //console.log(totalMembers);
        return ((numberUnderMember / totalMembers) * 100);
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