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
const eggs_service_1 = require("../eggs.service");
let ListComponent = class ListComponent {
    constructor(_eggsService) {
        this._eggsService = _eggsService;
        this._eggsService.list().subscribe(eggs => this.eggs = eggs);
        this.filterBy = 'eggName';
    }
    ngOnInit() {
        this._eggsService.list().subscribe(eggs => this.eggs = eggs);
    }
    filterByName() {
        this.filterBy = 'eggName';
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
        this.currentEgg = m;
    }
    delete() {
        this._eggsService.delete(this.currentEgg._id).subscribe(deletedEgg => {
            this._eggsService.list().subscribe(eggs => this.eggs = eggs);
            this.currentEgg = undefined;
        }, error => this.errorMessage = error);
    }
};
ListComponent = __decorate([
    core_1.Component({
        selector: 'list',
        templateUrl: 'app/eggs/list/list.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [eggs_service_1.EggsService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map