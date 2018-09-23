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
const affairs_service_1 = require("../affairs.service");
let ListComponent = class ListComponent {
    constructor(_affairsService) {
        this._affairsService = _affairsService;
        this._affairsService.list().subscribe(affairs => this.affairs = affairs);
        this.filterBy = 'affairName';
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
    __metadata("design:paramtypes", [affairs_service_1.AffairsService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map