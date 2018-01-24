webpackJsonp(["spells-setup.module"],{

/***/ "../../../../../src/app/spells-setup/spells-setup.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  <a title=\"Spells Per Day\" routerLink=\"/spells-per-day\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></a>\n  Spells Setup\n  <a routerLink=\"/spells-use\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i></a>\n</h1>\n<div class=\"spell-controls\">\n  <label>Spell Level ({{totalPreparedSpells}}/{{totalAllowedSpells}})</label>\n  <select class=\"custom-select\"  [value]=\"(spellLevelsState | async).selectedSpellLevelLabel\" (change)=\"onSelectedSpellLevelChange($event.target.value)\">  \n    <option value=\"\" disabled selected>Select</option>\n    <option *ngFor=\"let spellLevel of (spellLevelsState | async).spellLevels\" [value]=\"spellLevel.label\">{{spellLevel.label}}</option>\n  </select>\n  <button class=\"btn btn-success\" (click)=\"onReplenishClicked()\" [disabled]=\"replenishClicked\">Replenish</button>\n</div>\n<div class=\"content\">\n  <table class=\"table\">\n    <thead class=\"thead-light\">\n      <th>Uses</th>\n      <th>Known</th>\n      <th>Name</th>\n      <th>Description(short)</th>\n      <th>School</th>\n      <th>Components</th>\n      <th>Casting Time</th>\n      <th>Range</th>\n      <th>Target/Effect/Area</th>\n      <th>Duration</th>\n      <th>Save</th>\n      <th>Spell Resistance</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let spell of selectAllSpells(spellsState | async) | level: (spellLevelsState | async).selectedSpellLevelLabel: (spellsState | async).spellClass\">\n        <td>          \n          <app-number-picker \n            [disabled]=\"!spell.metaData.known\"              \n            [max]=\"totalAllowedSpells- totalPreparedSpells + spell.metaData.preparedUses\"\n            [value]=\"spell.metaData.preparedUses\" \n            (input)=\"onPreparedUsesChanged(spell, $event)\">\n          </app-number-picker>         \n        </td>\n        <td><i class=\"fa fa-2x text-primary\" \n          [class.fa-check-square]=\"spell.metaData.known\"\n          [class.fa-square-o]=\"!spell.metaData.known\"        \n          (click)=\"onSpellKnownChange(spell)\"></i></td>\n        <td>{{spell.name}}</td>\n        <td >{{spell.shortdescription}}<br>\n          <app-more-detail [text]=\"spell.description\"></app-more-detail>          \n        </td>\n        <td>{{spell.school}}</td>\n        <td>{{spell.components}}</td>\n        <td>{{spell.castingtime}}</td>\n        <td>{{spell.range}}</td>\n        <td>{{spell.target || spell.effect || spell.area}}</td>\n        <td>{{spell.duration}}</td>\n        <td>{{spell.savingthrow}}</td>\n        <td>{{spell.spellresistance}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <div [@alert]  *ngIf=\"replenishClicked\" class=\"alert alert-success\" role=\"alert\">\n    All your spells have been replenished\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/spells-setup/spells-setup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spell-controls {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 3rem;\n  background-color: white; }\n\ninput[type=\"checkbox\"] {\n  height: 2.4rem; }\n\nselect {\n  vertical-align: middle;\n  width: 4rem;\n  display: inline-block; }\n\ntable {\n  margin-top: 0.5rem; }\n\n.alert-success {\n  margin-bottom: 0;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spells-setup/spells-setup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpellsSetupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_level_pipe__ = __webpack_require__("../../../../../src/app/pipes/level.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_spell_levels_spell_levels_actions__ = __webpack_require__("../../../../../src/app/stores/spell-levels/spell-levels.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_spell_meta_datas_spell_meta_datas_actions__ = __webpack_require__("../../../../../src/app/stores/spell-meta-datas/spell-meta-datas.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_spells_spells_reducers__ = __webpack_require__("../../../../../src/app/stores/spells/spells.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SpellsSetupComponent = (function () {
    function SpellsSetupComponent(store) {
        this.store = store;
        this.selectAllSpells = __WEBPACK_IMPORTED_MODULE_6__stores_spells_spells_reducers__["b" /* selectAll */];
    }
    SpellsSetupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spellLevelsState = this.store.select('spellLevels');
        this.spellsState = this.store.select('spells');
        this.totalPreparedSpells = 0;
        this.totalAllowedSpells = 0;
        this.spellLevelSubscription = this.spellLevelsState.subscribe(function (state) {
            for (var _i = 0, _a = state.spellLevels; _i < _a.length; _i++) {
                var spellLevel = _a[_i];
                if (spellLevel.label === state.selectedSpellLevelLabel) {
                    _this.totalAllowedSpells = spellLevel.numOfSpells;
                    break;
                }
            }
            var spells;
            var spellClass;
            _this.spellsState
                .take(1)
                .subscribe(function (lastSpellsState) {
                spellClass = lastSpellsState.spellClass;
                spells = __WEBPACK_IMPORTED_MODULE_6__stores_spells_spells_reducers__["b" /* selectAll */](lastSpellsState);
            });
            _this.totalPreparedSpells = 0;
            new __WEBPACK_IMPORTED_MODULE_0__pipes_level_pipe__["a" /* LevelPipe */]()
                .transform(spells, state.selectedSpellLevelLabel, spellClass)
                .map(function (spell) { return _this.totalPreparedSpells += spell.metaData.preparedUses; });
        });
    };
    SpellsSetupComponent.prototype.ngOnDestroy = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__stores_spell_meta_datas_spell_meta_datas_actions__["d" /* StoreSpellMetaDatas */]());
        this.spellLevelSubscription.unsubscribe();
    };
    SpellsSetupComponent.prototype.onSelectedSpellLevelChange = function (newLevelLabel) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__stores_spell_levels_spell_levels_actions__["e" /* UpdateSelectedSpellLevelLabel */](newLevelLabel));
    };
    SpellsSetupComponent.prototype.onPreparedUsesChanged = function (spell, newValue) {
        this.totalPreparedSpells += newValue - spell.metaData.preparedUses;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__stores_spell_meta_datas_spell_meta_datas_actions__["e" /* UpdateSpellMetaData */]({
            spell: spell.name,
            metaData: __assign({}, spell.metaData, { preparedUses: newValue, remainingUses: newValue })
        }));
    };
    SpellsSetupComponent.prototype.onReplenishClicked = function () {
        var _this = this;
        var spells;
        this.spellsState
            .take(1)
            .subscribe(function (lastSpellsState) {
            spells = __WEBPACK_IMPORTED_MODULE_6__stores_spells_spells_reducers__["b" /* selectAll */](lastSpellsState);
        });
        for (var _i = 0, spells_1 = spells; _i < spells_1.length; _i++) {
            var spell = spells_1[_i];
            if (spell.metaData.known && spell.metaData.preparedUses > 0) {
                this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__stores_spell_meta_datas_spell_meta_datas_actions__["e" /* UpdateSpellMetaData */]({
                    spell: spell.name,
                    metaData: __assign({}, spell.metaData, { remainingUses: spell.metaData.preparedUses })
                }));
            }
        }
        this.replenishClicked = true;
        setTimeout(function () {
            _this.replenishClicked = false;
        }, 1500);
    };
    SpellsSetupComponent.prototype.onSpellKnownChange = function (spell) {
        var metaData = __assign({}, spell.metaData, { known: !spell.metaData.known });
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__stores_spell_meta_datas_spell_meta_datas_actions__["e" /* UpdateSpellMetaData */]({ spell: spell.name, metaData: metaData }));
    };
    SpellsSetupComponent.prototype.onSpellInfoClicked = function (spell) {
        alert(spell.description);
    };
    SpellsSetupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-spells-setup',
            template: __webpack_require__("../../../../../src/app/spells-setup/spells-setup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/spells-setup/spells-setup.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* trigger */])('alert', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({ transform: 'translateY(100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])(250, Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({ transform: 'translateY(0)' }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({ transform: 'translateY(0)', }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])(250, Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({ transform: 'translateY(100%)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */]])
    ], SpellsSetupComponent);
    return SpellsSetupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/spells-setup/spells-setup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpellsSetupModule", function() { return SpellsSetupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spells_setup_component__ = __webpack_require__("../../../../../src/app/spells-setup/spells-setup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SpellsSetupModule = (function () {
    function SpellsSetupModule() {
    }
    SpellsSetupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__spells_setup_component__["a" /* SpellsSetupComponent */] },
                ]),
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__spells_setup_component__["a" /* SpellsSetupComponent */]
            ],
        })
    ], SpellsSetupModule);
    return SpellsSetupModule;
}());



/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/take.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_take__ = __webpack_require__("../../../../rxjs/_esm5/operator/take.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_take PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.take = __WEBPACK_IMPORTED_MODULE_1__operator_take__["a" /* take */];
//# sourceMappingURL=take.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/take.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = take;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_take__ = __webpack_require__("../../../../rxjs/_esm5/operators/take.js");
/** PURE_IMPORTS_START .._operators_take PURE_IMPORTS_END */

/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_take__["a" /* take */])(count)(this);
}
//# sourceMappingURL=take.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/take.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = take;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_ArgumentOutOfRangeError__ = __webpack_require__("../../../../rxjs/_esm5/util/ArgumentOutOfRangeError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observable_EmptyObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/EmptyObservable.js");
/** PURE_IMPORTS_START .._Subscriber,.._util_ArgumentOutOfRangeError,.._observable_EmptyObservable PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    return function (source) {
        if (count === 0) {
            return new __WEBPACK_IMPORTED_MODULE_2__observable_EmptyObservable__["a" /* EmptyObservable */]();
        }
        else {
            return source.lift(new TakeOperator(count));
        }
    };
}
var TakeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function TakeOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new __WEBPACK_IMPORTED_MODULE_1__util_ArgumentOutOfRangeError__["a" /* ArgumentOutOfRangeError */];
        }
    }
    TakeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    TakeSubscriber.prototype._next = function (value) {
        var total = this.total;
        var count = ++this.count;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    };
    return TakeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=take.js.map 


/***/ })

});
//# sourceMappingURL=spells-setup.module.chunk.js.map