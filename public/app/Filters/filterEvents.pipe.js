"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FilterEventsPipe = /** @class */ (function () {
    //filters based in first and last names, and username/email
    function FilterEventsPipe() {
    }
    FilterEventsPipe.prototype.transform = function (items, term) {
        if (term === undefined)
            return items;
        return items.filter(function (items) {
            if (items.eventName.toLowerCase().includes(term.toLowerCase())) {
                return true;
            }
            else if (items.eventCode.toLowerCase().includes(term.toLowerCase())) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    FilterEventsPipe = __decorate([
        core_1.Pipe({
            name: 'filterEvents'
        })
        //filters based in first and last names, and username/email
    ], FilterEventsPipe);
    return FilterEventsPipe;
}());
exports.FilterEventsPipe = FilterEventsPipe;
//# sourceMappingURL=filterEvents.pipe.js.map