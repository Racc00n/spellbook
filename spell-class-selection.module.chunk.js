webpackJsonp(["spell-class-selection.module"],{

/***/ "../../../../../src/app/spell-class-selection/spell-class-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>\n        Spell Class\n        <a routerLink=\"/spells-per-day\"><i class=\"fa fa-chevron-right fa-inverse\" aria-hidden=\"true\"></i></a>      \n    </h1>\n    <div class=\"background\">      \n      <select \n        class=\"custom-select\" \n        [value] = \"(spellsState | async).spellClass\"\n        (change)=\"onSelectedSpellLevelChange($event.target.value)\">\n        <option *ngFor=\"let spellClass of spellClasses\" [value]=\"spellClass.spellClass\">{{spellClass.label}}</option>    \n      </select>\n      \n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/spell-class-selection/spell-class-selection.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  background-color: #007bff;\n  color: white;\n  margin-bottom: 0;\n  position: block; }\n\ndiv {\n  height: 100vh;\n  width: 100%;\n  overflow-y: hidden; }\n\ndiv .background {\n  background: url(/assets/book-cover.svg) no-repeat 0 30%;\n  background-size: 100%;\n  background-color: #007bff;\n  height: 100%;\n  width: auto; }\n\nselect {\n  color: #007bff;\n  font-weight: bold;\n  background-image: #007bff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spell-class-selection/spell-class-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpellClassSelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_spells_spells_actions__ = __webpack_require__("../../../../../src/app/stores/spells/spells.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_spell_class_enum__ = __webpack_require__("../../../../../src/app/model/spell-class.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpellClassSelectionComponent = (function () {
    function SpellClassSelectionComponent(store) {
        this.store = store;
        this.spellsState = store.select('spells');
        this.spellClasses = [];
    }
    SpellClassSelectionComponent.prototype.ngOnInit = function () {
        this.spellClasses = Object.keys(__WEBPACK_IMPORTED_MODULE_1__model_spell_class_enum__["a" /* SpellClass */]).map(function (key) { return ({ spellClass: __WEBPACK_IMPORTED_MODULE_1__model_spell_class_enum__["a" /* SpellClass */][key], label: key }); });
    };
    SpellClassSelectionComponent.prototype.onSelectedSpellLevelChange = function (newValue) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__stores_spells_spells_actions__["f" /* UpdateSpellClass */](newValue));
    };
    SpellClassSelectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-spell-class-selection',
            template: __webpack_require__("../../../../../src/app/spell-class-selection/spell-class-selection.component.html"),
            styles: [__webpack_require__("../../../../../src/app/spell-class-selection/spell-class-selection.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]])
    ], SpellClassSelectionComponent);
    return SpellClassSelectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/spell-class-selection/spell-class-selection.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpellClassSelectionModule", function() { return SpellClassSelectionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spell_class_selection_component__ = __webpack_require__("../../../../../src/app/spell-class-selection/spell-class-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SpellClassSelectionModule = (function () {
    function SpellClassSelectionModule() {
    }
    SpellClassSelectionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__spell_class_selection_component__["a" /* SpellClassSelectionComponent */] },
                ]),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__spell_class_selection_component__["a" /* SpellClassSelectionComponent */]
            ]
        })
    ], SpellClassSelectionModule);
    return SpellClassSelectionModule;
}());



/***/ })

});
//# sourceMappingURL=spell-class-selection.module.chunk.js.map