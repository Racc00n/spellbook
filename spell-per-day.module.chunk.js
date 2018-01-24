webpackJsonp(["spell-per-day.module"],{

/***/ "../../../../../src/app/spell-per-day/spell-per-day.component.html":
/***/ (function(module, exports) {

module.exports = "<div> \n  <h1>\n    <a title=\"Spell Class Selection\" routerLink=\"/spell-class-selection\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></a>Spells Per Day<a title=\"Spells Setup\" [routerLink]=\"['/spells-setup']\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i></a>\n  </h1>\n  <div class=\"content\" >\n    <table class=\"table\">\n      <thead>\n        <tr class=\"thead-light\">\n          <th>Level</th>\n          <th *ngFor=\"let level of (spellLevelsState | async).spellLevels\">{{level.label}}</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Spells</td>\n          <td *ngFor=\"let level of (spellLevelsState | async).spellLevels; let i = index\">            \n            <app-number-picker\n              [min]=\"0\" \n              [max]=\"30\"\n              [value]=\"level.numOfSpells\" \n              (input)=\"onSpellLevelChange(i, level, $event)\">\n            </app-number-picker>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/spell-per-day/spell-per-day.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spell-per-day/spell-per-day.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpellPerDayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_spell_levels_spell_levels_actions__ = __webpack_require__("../../../../../src/app/stores/spell-levels/spell-levels.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpellPerDayComponent = (function () {
    function SpellPerDayComponent(store) {
        this.store = store;
    }
    SpellPerDayComponent.prototype.ngOnInit = function () {
        this.spellLevelsState = this.store.select('spellLevels');
    };
    SpellPerDayComponent.prototype.ngOnDestroy = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__stores_spell_levels_spell_levels_actions__["d" /* StoreSpellLevels */]());
    };
    SpellPerDayComponent.prototype.onSpellLevelChange = function (index, level, numOfSpells) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__stores_spell_levels_spell_levels_actions__["f" /* UpdateSpellLevel */]({
            index: index,
            numOfSpells: numOfSpells
        }));
    };
    SpellPerDayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-spell-per-day',
            template: __webpack_require__("../../../../../src/app/spell-per-day/spell-per-day.component.html"),
            styles: [__webpack_require__("../../../../../src/app/spell-per-day/spell-per-day.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], SpellPerDayComponent);
    return SpellPerDayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/spell-per-day/spell-per-day.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpellPerDayModule", function() { return SpellPerDayModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spell_per_day_component__ = __webpack_require__("../../../../../src/app/spell-per-day/spell-per-day.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SpellPerDayModule = (function () {
    function SpellPerDayModule() {
    }
    SpellPerDayModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__spell_per_day_component__["a" /* SpellPerDayComponent */] },
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__spell_per_day_component__["a" /* SpellPerDayComponent */]
            ]
        })
    ], SpellPerDayModule);
    return SpellPerDayModule;
}());



/***/ })

});
//# sourceMappingURL=spell-per-day.module.chunk.js.map