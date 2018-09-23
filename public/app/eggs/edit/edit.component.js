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
const eggs_service_1 = require("../eggs.service");
let EditComponent = class EditComponent {
    constructor(_router, _route, _eggsService) {
        this._router = _router;
        this._route = _route;
        this._eggsService = _eggsService;
        this.egg = {};
    }
    ngOnInit() {
        this.g = document.getElementById('errorMessage');
        this.g.style.display = 'none';
        this.s = document.getElementById('successMessage');
        this.s.style.display = 'none';
        this.paramsObserver = this._route.params.subscribe(params => {
            let eggId = params['eggId'];
            this._eggsService.read(eggId).subscribe(egg => {
                this.egg = egg;
            }, error => this._router.navigate(['/eggs']));
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    update() {
        this._eggsService.update(this.egg).subscribe(savedEgg => {
            this.s.style.display = 'none';
            this.s.style.display = 'block';
            setTimeout(() => {
                this._router.navigate(['/eggs']);
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
        templateUrl: 'app/eggs/edit/edit.template.html',
        styleUrls: ['app/app.styles.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        eggs_service_1.EggsService])
], EditComponent);
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map