webpackJsonp(["spells-use.module"],{

/***/ "../../../../../src/app/pipes/known.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnownPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KnownPipe = (function () {
    function KnownPipe() {
    }
    KnownPipe.prototype.transform = function (value, args) {
        return value.filter(function (spell) { return spell.metaData.known; });
    };
    KnownPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'known'
        })
    ], KnownPipe);
    return KnownPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/remaining-uses.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemainingUsesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RemainingUsesPipe = (function () {
    function RemainingUsesPipe() {
    }
    RemainingUsesPipe.prototype.transform = function (value, args) {
        return value.filter(function (spell) { return spell.metaData.remainingUses > 0; });
    };
    RemainingUsesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'remainingUses',
            pure: false
        })
    ], RemainingUsesPipe);
    return RemainingUsesPipe;
}());



/***/ }),

/***/ "../../../../../src/app/spells-use/spells-use.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  <a title=\"Spells Setup\" [routerLink]=\"['/spells-setup']\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></a>\n  Spells Use\n</h1>\n<div  *ngFor=\"let spellLevel of (spellLevelsState|async).spellLevels\" [hidden]=\"tbody.children.length === 0\">\n  <h2 class=\"alert-dark\">Level {{spellLevel.label}} </h2>\n  <div class=\"content\">\n    <table class=\"table\">\n      <thead class=\"thead-light\">\n        <th>Remaining Uses</th>\n        <th>Cast</th>\n        <th>Name</th>\n        <th>Description</th>\n        <th>School</th>\n        <th>Components</th>\n        <th>Casting Time</th>\n        <th>Range</th>\n        <th>Target/Effect/Area</th>\n        <th>Duration</th>\n        <th>Save</th>\n        <th>Spell Resistance</th>\n      </thead>\n\n      <tbody #tbody>\n        <tr [@spellRemoval] \n            (@spellRemoval.done)=\"spellRemovalDone(tbody.children.length === 0)\" \n            *ngFor=\"let spell of selectAllSpells(spellsState | async) | level: spellLevel.label: (spellsState | async).spellClass | known | remainingUses ; trackBy:spellsTrackBy\" >\n          <td>{{spell.metaData.remainingUses}}</td>\n          <td>\n            <button class=\"btn btn-fab btn-primary\" (click)=\"castSpellClicked(spell)\">Cast</button>\n          </td>\n          <td>{{spell.name}}</td>\n          <td >{{spell.shortdescription}}<br>\n            <app-more-detail [text]=\"spell.description\"></app-more-detail>          \n          </td>\n          <td>{{spell.school}}</td>\n          <td>{{spell.components}}</td>\n          <td>{{spell.castingtime}}</td>\n          <td>{{spell.range}}</td>\n          <td>{{spell.target || spell.effect || spell.area}}</td>\n          <td>{{spell.duration}}</td>\n          <td>{{spell.savingthrow}}</td>\n          <td>{{spell.spellresistance}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/spells-use/spells-use.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 3rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spells-use/spells-use.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpellsUseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_spell_meta_datas_spell_meta_datas_actions__ = __webpack_require__("../../../../../src/app/stores/spell-meta-datas/spell-meta-datas.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_spells_spells_reducers__ = __webpack_require__("../../../../../src/app/stores/spells/spells.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_spell_meta_data__ = __webpack_require__("../../../../../src/app/model/spell-meta-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpellsUseComponent = (function () {
    function SpellsUseComponent(store, changeRef) {
        this.store = store;
        this.changeRef = changeRef;
        this.selectAllSpells = __WEBPACK_IMPORTED_MODULE_4__stores_spells_spells_reducers__["b" /* selectAll */];
    }
    SpellsUseComponent.prototype.ngOnInit = function () {
        this.spellLevelsState = this.store.select('spellLevels');
        this.spellsState = this.store.select('spells');
    };
    SpellsUseComponent.prototype.ngOnDestroy = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__stores_spell_meta_datas_spell_meta_datas_actions__["d" /* StoreSpellMetaDatas */]());
    };
    SpellsUseComponent.prototype.spellRemovalDone = function (shouldDetectChanges) {
        if (shouldDetectChanges) {
            this.changeRef.detectChanges();
        }
    };
    SpellsUseComponent.prototype.castSpellClicked = function (spell) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__stores_spell_meta_datas_spell_meta_datas_actions__["e" /* UpdateSpellMetaData */]({
            spell: spell.name,
            metaData: new __WEBPACK_IMPORTED_MODULE_5__model_spell_meta_data__["a" /* SpellMetaData */](spell.metaData.known, spell.metaData.preparedUses, spell.metaData.remainingUses - 1)
        }));
    };
    SpellsUseComponent.prototype.onSpellInfoClicked = function (spell) {
        alert(spell.description);
    };
    SpellsUseComponent.prototype.spellsTrackBy = function (index, spell) {
        console.log(spell.name);
        return spell.name;
    };
    SpellsUseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-spells-use',
            template: __webpack_require__("../../../../../src/app/spells-use/spells-use.component.html"),
            styles: [__webpack_require__("../../../../../src/app/spells-use/spells-use.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('spellRemoval', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({
                            opacity: 1,
                            transform: 'translateX(0)'
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(200, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({
                            transform: 'translateX(100px)',
                            opacity: 0
                        }))
                    ])
                ]),
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */]])
    ], SpellsUseComponent);
    return SpellsUseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/spells-use/spells-use.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpellsUseModule", function() { return SpellsUseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spells_use_component__ = __webpack_require__("../../../../../src/app/spells-use/spells-use.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_known_pipe__ = __webpack_require__("../../../../../src/app/pipes/known.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_remaining_uses_pipe__ = __webpack_require__("../../../../../src/app/pipes/remaining-uses.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SpellsUseModule = (function () {
    function SpellsUseModule() {
    }
    SpellsUseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__spells_use_component__["a" /* SpellsUseComponent */] },
                ]),
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__spells_use_component__["a" /* SpellsUseComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_known_pipe__["a" /* KnownPipe */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_remaining_uses_pipe__["a" /* RemainingUsesPipe */]
            ]
        })
    ], SpellsUseModule);
    return SpellsUseModule;
}());



/***/ })

});
//# sourceMappingURL=spells-use.module.chunk.js.map