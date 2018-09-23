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
var router_1 = require("@angular/router");
var events_service_1 = require("../events.service");
var CreateComponent = /** @class */ (function () {
    function CreateComponent(_router, _eventsService) {
        this._router = _router;
        this._eventsService = _eventsService;
        this.event = {};
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.g = document.getElementById('errorMessage');
        this.g.style.display = 'none';
        this.s = document.getElementById('successMessage');
        this.s.style.display = 'none';
    };
    CreateComponent.prototype.create = function () {
        var _this = this;
        this.event.eventName = this.event.eventName.replace(/\s+/g, '');
        this._eventsService.create(this.event).subscribe(function (createdEvent) {
            _this.s.style.display = 'none';
            _this.s.style.display = 'block';
            setTimeout(function () {
                _this._router.navigate(['/events']);
            }, 1500);
        }, function (error) {
            _this.errorMessage = error;
            _this.g.style.display = 'none';
            _this.g.style.display = 'block';
        });
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'create',
            templateUrl: 'app/events/create/create.template.html',
            styleUrls: ['app/app.styles.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            events_service_1.EventsService])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map