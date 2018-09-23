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
const pointRequests_service_1 = require("../pointRequests.service");
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