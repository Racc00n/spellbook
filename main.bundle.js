webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./spell-class-selection/spell-class-selection.module": [
		"../../../../../src/app/spell-class-selection/spell-class-selection.module.ts",
		"spell-class-selection.module"
	],
	"./spell-per-day/spell-per-day.module": [
		"../../../../../src/app/spell-per-day/spell-per-day.module.ts",
		"common",
		"spell-per-day.module"
	],
	"./spells-setup/spells-setup.module": [
		"../../../../../src/app/spells-setup/spells-setup.module.ts",
		"common",
		"spells-setup.module"
	],
	"./spells-use/spells-use.module": [
		"../../../../../src/app/spells-use/spells-use.module.ts",
		"common",
		"spells-use.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/animations/animations.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");

var AnimationsModule = (function () {
    function AnimationsModule() {
    }
    AnimationsModule.forRoot = function () {
        return window.location.search.indexOf('qa=true') > -1 ? __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["b" /* NoopAnimationsModule */] : __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */];
    };
    return AnimationsModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [
    { path: '', redirectTo: '/spell-class-selection', pathMatch: 'full' },
    { path: 'spell-class-selection', loadChildren: './spell-class-selection/spell-class-selection.module#SpellClassSelectionModule' },
    { path: 'spells-per-day', loadChildren: './spell-per-day/spell-per-day.module#SpellPerDayModule' },
    { path: 'spells-setup', loadChildren: './spells-setup/spells-setup.module#SpellsSetupModule' },
    { path: 'spells-use', loadChildren: './spells-use/spells-use.module#SpellsUseModule' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"app\" style=\"text-align:center\">\n  <router-outlet></router-outlet>    \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.app {\n  width: 90vw;\n  margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_spells_spells_actions__ = __webpack_require__("../../../../../src/app/stores/spells/spells.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_spell_meta_datas_spell_meta_datas_actions__ = __webpack_require__("../../../../../src/app/stores/spell-meta-datas/spell-meta-datas.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_spell_levels_spell_levels_actions__ = __webpack_require__("../../../../../src/app/stores/spell-levels/spell-levels.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(router, store) {
        this.router = router;
        this.store = store;
        router.navigate(['']);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__stores_spells_spells_actions__["a" /* FetchSpellClass */]());
        window.addEventListener('beforeunload', function () { return _this.storeAll(); });
    };
    AppComponent.prototype.storeAll = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__stores_spell_meta_datas_spell_meta_datas_actions__["d" /* StoreSpellMetaDatas */]());
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__stores_spell_levels_spell_levels_actions__["d" /* StoreSpellLevels */]());
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__stores_spells_spells_actions__["e" /* StoreSpellClass */]());
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_spell_meta_datas_spell_meta_datas_effects__ = __webpack_require__("../../../../../src/app/stores/spell-meta-datas/spell-meta-datas.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_persistance_service__ = __webpack_require__("../../../../../src/app/services/persistance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_animations_module__ = __webpack_require__("../../../../../src/app/animations/animations.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stores_spell_levels_spell_levels_effects__ = __webpack_require__("../../../../../src/app/stores/spell-levels/spell-levels.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stores_app_reducers__ = __webpack_require__("../../../../../src/app/stores/app.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stores_spells_spells_effects__ = __webpack_require__("../../../../../src/app/stores/spells/spells.effects.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__animations_animations_module__["a" /* AnimationsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["c" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__stores_app_reducers__["a" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_10__stores_spell_levels_spell_levels_effects__["a" /* SpellLevelsEffects */], __WEBPACK_IMPORTED_MODULE_0__stores_spell_meta_datas_spell_meta_datas_effects__["a" /* SpellMetaDatasEffects */], __WEBPACK_IMPORTED_MODULE_12__stores_spells_spells_effects__["a" /* SpellsEffects */]])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_persistance_service__["a" /* PersistanceService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/data/default-spell-levels.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultSpellLevels; });
var defaultSpellLevels = [
    {
        label: '0',
        numOfSpells: 4
    },
    {
        label: '1',
        numOfSpells: 0
    },
    {
        label: '2',
        numOfSpells: 0
    },
    {
        label: '3',
        numOfSpells: 0
    },
    {
        label: '4',
        numOfSpells: 0
    },
    {
        label: '5',
        numOfSpells: 0
    },
    {
        label: '6',
        numOfSpells: 0
    },
    {
        label: '7',
        numOfSpells: 0
    },
    {
        label: '8',
        numOfSpells: 0
    },
    {
        label: '9',
        numOfSpells: 0
    }
];


/***/ }),

/***/ "../../../../../src/app/model/spell-class.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpellClass; });
var SpellClass;
(function (SpellClass) {
    SpellClass["sorcererWizard"] = "Sor/Wiz";
    SpellClass["cleric"] = "Clr";
    SpellClass["bard"] = "Brd";
    SpellClass["druid"] = "Drd";
})(SpellClass || (SpellClass = {}));


/***/ }),

/***/ "../../../../../src/app/model/spell-meta-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpellMetaData; });
var SpellMetaData = (function () {
    function SpellMetaData(known, preparedUses, remainingUses) {
        if (known === void 0) { known = false; }
        if (preparedUses === void 0) { preparedUses = 0; }
        if (remainingUses === void 0) { remainingUses = 0; }
        this.known = known;
        this.preparedUses = preparedUses;
        this.remainingUses = remainingUses;
    }
    return SpellMetaData;
}());



/***/ }),

/***/ "../../../../../src/app/services/persistance.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SPELL_LEVELS */
/* unused harmony export SPELLS_METADATA */
/* unused harmony export SPELL_CLASS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersistanceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_spell_class_enum__ = __webpack_require__("../../../../../src/app/model/spell-class.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_default_spell_levels__ = __webpack_require__("../../../../../src/app/data/default-spell-levels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SPELL_LEVELS = 'spellLevels';
var SPELLS_METADATA = 'spellsMetaData';
var SPELL_CLASS = 'spellClass';
var PersistanceService = (function () {
    function PersistanceService(http) {
        this.http = http;
    }
    PersistanceService.prototype.fetchSpellClass = function () {
        var result = new Promise(function (resolve, reject) {
            try {
                var spellClass = JSON.parse(localStorage.getItem(SPELL_CLASS));
                spellClass ? resolve(spellClass) : resolve(__WEBPACK_IMPORTED_MODULE_0__model_spell_class_enum__["a" /* SpellClass */].sorcererWizard);
            }
            catch (error) {
                reject('Unable to load spellClass: ' + error);
            }
        });
        return result;
    };
    PersistanceService.prototype.storeSpellClass = function (spellClass) {
        var result = new Promise(function (resolve, reject) {
            try {
                (localStorage.setItem(SPELL_CLASS, JSON.stringify(spellClass)));
                resolve();
            }
            catch (error) {
                reject('Unable to save spellClass: ' + error);
            }
        });
        return result;
    };
    PersistanceService.prototype.fetchSpellLevelsByClass = function (spellClass) {
        var result = new Promise(function (resolve, reject) {
            try {
                var spellLevels = JSON.parse(localStorage.getItem(SPELL_LEVELS + spellClass));
                spellLevels ? resolve(spellLevels) : resolve(__WEBPACK_IMPORTED_MODULE_1__data_default_spell_levels__["a" /* defaultSpellLevels */]);
            }
            catch (error) {
                reject('Unable to load spellLevels: ' + error);
            }
        });
        return result;
    };
    PersistanceService.prototype.storeSpellLevelsByClass = function (spellLevels, spellClass) {
        var result = new Promise(function (resolve, reject) {
            try {
                (localStorage.setItem(SPELL_LEVELS + spellClass, JSON.stringify(spellLevels)));
                resolve();
            }
            catch (error) {
                reject('Unable to save spellLevels: ' + error);
            }
        });
        return result;
    };
    PersistanceService.prototype.fetchSpellsByClass = function (spellClass) {
        var _this = this;
        var result = new Promise(function (resolve, reject) {
            var subscription = _this.http.get('assets/spells.json').subscribe(function (data) {
                try {
                    var spells = data.spells;
                    var filteredSpells = spells
                        .filter(function (spell) { return spell.level.includes(spellClass); });
                    resolve(filteredSpells);
                }
                catch (error) {
                    reject('could not load spells ' + error);
                }
                finally {
                    subscription.unsubscribe();
                }
            });
        });
        return result;
    };
    PersistanceService.prototype.storeSpellsMetaDataByClass = function (spellsMetaData, spellClass) {
        var result = new Promise(function (resolve, reject) {
            try {
                (localStorage.setItem(SPELLS_METADATA + spellClass, JSON.stringify(spellsMetaData)));
                resolve();
            }
            catch (error) {
                reject('Unable to save spells metadata: ' + error);
            }
        });
        return result;
    };
    PersistanceService.prototype.fetchSpellsMetaDataByClass = function (spellClass) {
        var result = new Promise(function (resolve, reject) {
            try {
                var spellMetaData = JSON.parse(localStorage.getItem(SPELLS_METADATA + spellClass)) || {};
                resolve(spellMetaData);
            }
            catch (error) {
                reject('Unable to load SpellMetaDatas: ' + error);
            }
        });
        return result;
    };
    PersistanceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], PersistanceService);
    return PersistanceService;
}());



/***/ }),

/***/ "../../../../../src/app/stores/app.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spell_levels_spell_levels_reducers__ = __webpack_require__("../../../../../src/app/stores/spell-levels/spell-levels.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spell_meta_datas_spell_meta_datas_reducers__ = __webpack_require__("../../../../../src/app/stores/spell-meta-datas/spell-meta-datas.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spells_spells_reducers__ = __webpack_require__("../../../../../src/app/stores/spells/spells.reducers.ts");



var reducers = {
    spellLevels: __WEBPACK_IMPORTED_MODULE_0__spell_levels_spell_levels_reducers__["a" /* SpellLevelReducer */],
    spellMetaDatas: __WEBPACK_IMPORTED_MODULE_1__spell_meta_datas_spell_meta_datas_reducers__["a" /* SpellMetaDatasReducer */],
    spells: __WEBPACK_IMPORTED_MODULE_2__spells_spells_reducers__["a" /* SpellsReducer */]
};


/***/ }),

/***/ "../../../../../src/app/stores/spell-levels/spell-levels.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SpellLevelsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SetSpellLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UpdateSpellLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UpdateSelectedSpellLevelLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchSpellLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return StoreSpellLevels; });
var SpellLevelsActionTypes;
(function (SpellLevelsActionTypes) {
    SpellLevelsActionTypes["SET_SPELL_LEVELS"] = "[SpellLevel] Set Spell Levels";
    SpellLevelsActionTypes["UPDATE_SPELL_LEVEL"] = "[SpellLevel] Update Spell Level";
    SpellLevelsActionTypes["UPDATE_SELECTED_SPELL_LEVEL_LABEL"] = "[SpellLevel] Update Selected Spell Level Lablel";
    SpellLevelsActionTypes["FETCH_SPELL_LEVELS"] = "[SpellLevel] Fetch Spell Levels";
    SpellLevelsActionTypes["STORE_SPELL_LEVELS"] = "[SpellLevel] Store Spell Levels";
})(SpellLevelsActionTypes || (SpellLevelsActionTypes = {}));
var SetSpellLevels = (function () {
    function SetSpellLevels(payload) {
        this.payload = payload;
        this.type = SpellLevelsActionTypes.SET_SPELL_LEVELS;
    }
    return SetSpellLevels;
}());

var UpdateSpellLevel = (function () {
    function UpdateSpellLevel(payload) {
        this.payload = payload;
        this.type = SpellLevelsActionTypes.UPDATE_SPELL_LEVEL;
    }
    return UpdateSpellLevel;
}());

var UpdateSelectedSpellLevelLabel = (function () {
    function UpdateSelectedSpellLevelLabel(payload) {
        this.payload = payload;
        this.type = SpellLevelsActionTypes.UPDATE_SELECTED_SPELL_LEVEL_LABEL;
    }
    return UpdateSelectedSpellLevelLabel;
}());

var FetchSpellLevels = (function () {
    function FetchSpellLevels() {
        this.type = SpellLevelsActionTypes.FETCH_SPELL_LEVELS;
    }
    return FetchSpellLevels;
}());

var StoreSpellLevels = (function () {
    function StoreSpellLevels() {
        this.type = SpellLevelsActionTypes.STORE_SPELL_LEVELS;
    }
    return StoreSpellLevels;
}());



/***/ }),

/***/ "../../../../../src/app/stores/spell-levels/spell-levels.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpellLevelsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_persistance_service__ = __webpack_require__("../../../../../src/app/services/persistance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spell_levels_actions__ = __webpack_require__("../../../../../src/app/stores/spell-levels/spell-levels.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SpellLevelsEffects = (function () {
    function SpellLevelsEffects(actions, store, persistance) {
        var _this = this;
        this.actions = actions;
        this.store = store;
        this.persistance = persistance;
        this.spellLevelsFetch = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_2__spell_levels_actions__["c" /* SpellLevelsActionTypes */].FETCH_SPELL_LEVELS)
            .withLatestFrom(this.store.select('spells'))
            .switchMap(function (_a) {
            var action = _a[0], spellsState = _a[1];
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].fromPromise(_this.persistance.fetchSpellLevelsByClass(spellsState.spellClass));
        })
            .map(function (spellLevels) { return new __WEBPACK_IMPORTED_MODULE_2__spell_levels_actions__["b" /* SetSpellLevels */](spellLevels); });
        this.spellLevelStore = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_2__spell_levels_actions__["c" /* SpellLevelsActionTypes */].STORE_SPELL_LEVELS)
            .withLatestFrom(this.store.select('spellLevels'))
            .withLatestFrom(this.store.select('spells'))
            .switchMap(function (_a) {
            var _b = _a[0], action = _b[0], spellLevelsState = _b[1], spellsState = _a[1];
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].fromPromise(_this.persistance.storeSpellLevelsByClass(spellLevelsState.spellLevels, spellsState.spellClass));
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], SpellLevelsEffects.prototype, "spellLevelsFetch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], SpellLevelsEffects.prototype, "spellLevelStore", void 0);
    SpellLevelsEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__services_persistance_service__["a" /* PersistanceService */]])
    ], SpellLevelsEffects);
    return SpellLevelsEffects;
}());



/***/ }),

/***/ "../../../../../src/app/stores/spell-levels/spell-levels.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SpellLevelReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_default_spell_levels__ = __webpack_require__("../../../../../src/app/data/default-spell-levels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spell_levels_actions__ = __webpack_require__("../../../../../src/app/stores/spell-levels/spell-levels.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    spellLevels: __WEBPACK_IMPORTED_MODULE_0__data_default_spell_levels__["a" /* defaultSpellLevels */],
    selectedSpellLevelLabel: __WEBPACK_IMPORTED_MODULE_0__data_default_spell_levels__["a" /* defaultSpellLevels */][0].label
};
function SpellLevelReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__spell_levels_actions__["c" /* SpellLevelsActionTypes */].SET_SPELL_LEVELS:
            return __assign({}, state, { spellLevels: action.payload });
        case __WEBPACK_IMPORTED_MODULE_1__spell_levels_actions__["c" /* SpellLevelsActionTypes */].UPDATE_SPELL_LEVEL:
            {
                var index = action.payload.index;
                var original = state.spellLevels[index];
                var updated = __assign({}, original, { numOfSpells: action.payload.numOfSpells });
                var spellLevels = state.spellLevels.slice();
                spellLevels[index] = updated;
                return __assign({}, state, { spellLevels: spellLevels });
            }
            ;
        case __WEBPACK_IMPORTED_MODULE_1__spell_levels_actions__["c" /* SpellLevelsActionTypes */].UPDATE_SELECTED_SPELL_LEVEL_LABEL:
            return __assign({}, state, { selectedSpellLevelLabel: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/stores/spell-meta-datas/spell-meta-datas.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SpellMetaDatasActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SetSpellMetaDatas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UpdateSpellMetaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchSpellMetaDatas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return StoreSpellMetaDatas; });
var SpellMetaDatasActionTypes;
(function (SpellMetaDatasActionTypes) {
    SpellMetaDatasActionTypes["SET_SPELL_META_DATAS"] = "[SpellMetaData] Set Spell MetaDatas";
    SpellMetaDatasActionTypes["UPDATE_SPELL_META_DATA"] = "[SpellMetaData] Update Spell MetaDatas";
    SpellMetaDatasActionTypes["FETCH_SPELL_META_DATAS"] = "[SpellMetaData] Fetch Spell MetaDatas";
    SpellMetaDatasActionTypes["STORE_SPELL_META_DATAS"] = "[SpellMetaData] Store  Spell MetaDatas";
})(SpellMetaDatasActionTypes || (SpellMetaDatasActionTypes = {}));
var SetSpellMetaDatas = (function () {
    function SetSpellMetaDatas(payload) {
        this.payload = payload;
        this.type = SpellMetaDatasActionTypes.SET_SPELL_META_DATAS;
    }
    return SetSpellMetaDatas;
}());

var UpdateSpellMetaData = (function () {
    function UpdateSpellMetaData(payload) {
        this.payload = payload;
        this.type = SpellMetaDatasActionTypes.UPDATE_SPELL_META_DATA;
    }
    return UpdateSpellMetaData;
}());

var FetchSpellMetaDatas = (function () {
    function FetchSpellMetaDatas() {
        this.type = SpellMetaDatasActionTypes.FETCH_SPELL_META_DATAS;
    }
    return FetchSpellMetaDatas;
}());

var StoreSpellMetaDatas = (function () {
    function StoreSpellMetaDatas() {
        this.type = SpellMetaDatasActionTypes.STORE_SPELL_META_DATAS;
    }
    return StoreSpellMetaDatas;
}());



/***/ }),

/***/ "../../../../../src/app/stores/spell-meta-datas/spell-meta-datas.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpellMetaDatasEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spell_meta_datas_actions__ = __webpack_require__("../../../../../src/app/stores/spell-meta-datas/spell-meta-datas.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_persistance_service__ = __webpack_require__("../../../../../src/app/services/persistance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SpellMetaDatasEffects = (function () {
    function SpellMetaDatasEffects(actions, store, persistance) {
        var _this = this;
        this.actions = actions;
        this.store = store;
        this.persistance = persistance;
        this.spellMetaDatasFetch = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_0__spell_meta_datas_actions__["c" /* SpellMetaDatasActionTypes */].FETCH_SPELL_META_DATAS)
            .withLatestFrom(this.store.select('spells'))
            .switchMap(function (_a) {
            var action = _a[0], state = _a[1];
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromPromise(_this.persistance.fetchSpellsMetaDataByClass(state.spellClass));
        })
            .map(function (spellMetaDatas) {
            return new __WEBPACK_IMPORTED_MODULE_0__spell_meta_datas_actions__["b" /* SetSpellMetaDatas */](spellMetaDatas);
        });
        this.spellMetaDatasStore = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_0__spell_meta_datas_actions__["c" /* SpellMetaDatasActionTypes */].STORE_SPELL_META_DATAS)
            .withLatestFrom(this.store.select('spellMetaDatas'))
            .withLatestFrom(this.store.select('spells'))
            .switchMap(function (_a) {
            var _b = _a[0], action = _b[0], spellMetaDatasState = _b[1], spellState = _a[1];
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromPromise(_this.persistance.storeSpellsMetaDataByClass(spellMetaDatasState.spellMetaDatas, spellState.spellClass));
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], SpellMetaDatasEffects.prototype, "spellMetaDatasFetch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], SpellMetaDatasEffects.prototype, "spellMetaDatasStore", void 0);
    SpellMetaDatasEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__services_persistance_service__["a" /* PersistanceService */]])
    ], SpellMetaDatasEffects);
    return SpellMetaDatasEffects;
}());



/***/ }),

/***/ "../../../../../src/app/stores/spell-meta-datas/spell-meta-datas.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SpellMetaDatasReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spell_meta_datas_actions__ = __webpack_require__("../../../../../src/app/stores/spell-meta-datas/spell-meta-datas.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    spellMetaDatas: {}
};
function SpellMetaDatasReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__spell_meta_datas_actions__["c" /* SpellMetaDatasActionTypes */].SET_SPELL_META_DATAS:
            return __assign({}, state, { spellMetaDatas: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__spell_meta_datas_actions__["c" /* SpellMetaDatasActionTypes */].UPDATE_SPELL_META_DATA:
            return __assign({}, state, { spellMetaDatas: __assign({}, state.spellMetaDatas, (_a = {}, _a[action.payload.spell] = action.payload.metaData, _a)) });
        default:
            return state;
    }
    var _a;
}


/***/ }),

/***/ "../../../../../src/app/stores/spells/spells.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SpellActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SetSpells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UpdateSpellClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FetchSpells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchSpellClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return StoreSpellClass; });
var SpellActionTypes;
(function (SpellActionTypes) {
    SpellActionTypes["SET_SPELLS"] = "[Spell] Set Spells";
    SpellActionTypes["UPDATE_SPELL_CLASS"] = "[Spell] Update Spell Class";
    SpellActionTypes["FETCH_SPELLS"] = "[Spell] Fetch Spells";
    SpellActionTypes["FETCH_SPELL_CLASS"] = "[Spell] Fetch Spell Class";
    SpellActionTypes["STORE_SPELL_CLASS"] = "[Spell] Store Spell Class";
})(SpellActionTypes || (SpellActionTypes = {}));
var SetSpells = (function () {
    function SetSpells(payload) {
        this.payload = payload;
        this.type = SpellActionTypes.SET_SPELLS;
    }
    return SetSpells;
}());

var UpdateSpellClass = (function () {
    function UpdateSpellClass(payload) {
        this.payload = payload;
        this.type = SpellActionTypes.UPDATE_SPELL_CLASS;
    }
    return UpdateSpellClass;
}());

var FetchSpells = (function () {
    function FetchSpells() {
        this.type = SpellActionTypes.FETCH_SPELLS;
    }
    return FetchSpells;
}());

var FetchSpellClass = (function () {
    function FetchSpellClass() {
        this.type = SpellActionTypes.FETCH_SPELL_CLASS;
    }
    return FetchSpellClass;
}());

var StoreSpellClass = (function () {
    function StoreSpellClass() {
        this.type = SpellActionTypes.STORE_SPELL_CLASS;
    }
    return StoreSpellClass;
}());



/***/ }),

/***/ "../../../../../src/app/stores/spells/spells.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpellsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spell_meta_datas_spell_meta_datas_actions__ = __webpack_require__("../../../../../src/app/stores/spell-meta-datas/spell-meta-datas.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spell_levels_spell_levels_actions__ = __webpack_require__("../../../../../src/app/stores/spell-levels/spell-levels.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_spell_meta_data__ = __webpack_require__("../../../../../src/app/model/spell-meta-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spells_actions__ = __webpack_require__("../../../../../src/app/stores/spells/spells.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_persistance_service__ = __webpack_require__("../../../../../src/app/services/persistance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var SpellsEffects = (function () {
    function SpellsEffects(actions, store, persistance) {
        var _this = this;
        this.actions = actions;
        this.store = store;
        this.persistance = persistance;
        this.spellsFetch = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_4__spells_actions__["d" /* SpellActionTypes */].FETCH_SPELLS)
            .withLatestFrom(this.store.select('spells'))
            .switchMap(function (_a) {
            var action = _a[0], state = _a[1];
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].fromPromise(_this.persistance.fetchSpellsByClass(state.spellClass));
        })
            .withLatestFrom(this.store.select('spellMetaDatas'))
            .map(function (_a) {
            var spells = _a[0], metaDataState = _a[1];
            var updateSpells = spells.map(function (spell) {
                spell.metaData = metaDataState.spellMetaDatas[spell.name] || new __WEBPACK_IMPORTED_MODULE_2__model_spell_meta_data__["a" /* SpellMetaData */](); //need to see what to do about meta data
                return spell;
            });
            return new __WEBPACK_IMPORTED_MODULE_4__spells_actions__["c" /* SetSpells */](updateSpells);
        });
        this.spellClassUpdate = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_4__spells_actions__["d" /* SpellActionTypes */].UPDATE_SPELL_CLASS)
            .mergeMap(function (action) { return [
            new __WEBPACK_IMPORTED_MODULE_4__spells_actions__["b" /* FetchSpells */](),
            new __WEBPACK_IMPORTED_MODULE_1__spell_levels_spell_levels_actions__["a" /* FetchSpellLevels */](),
            new __WEBPACK_IMPORTED_MODULE_0__spell_meta_datas_spell_meta_datas_actions__["a" /* FetchSpellMetaDatas */]()
        ]; });
        this.spellClassFetch = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_4__spells_actions__["d" /* SpellActionTypes */].FETCH_SPELL_CLASS)
            .switchMap(function (action) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].fromPromise(_this.persistance.fetchSpellClass());
        })
            .map(function (spellClass) { return new __WEBPACK_IMPORTED_MODULE_4__spells_actions__["f" /* UpdateSpellClass */](spellClass); });
        this.spellClassStore = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_4__spells_actions__["d" /* SpellActionTypes */].STORE_SPELL_CLASS)
            .withLatestFrom(this.store.select('spells'))
            .switchMap(function (_a) {
            var action = _a[0], state = _a[1];
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].fromPromise(_this.persistance.storeSpellClass(state.spellClass));
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], SpellsEffects.prototype, "spellsFetch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], SpellsEffects.prototype, "spellClassUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], SpellsEffects.prototype, "spellClassFetch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], SpellsEffects.prototype, "spellClassStore", void 0);
    SpellsEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_5__services_persistance_service__["a" /* PersistanceService */]])
    ], SpellsEffects);
    return SpellsEffects;
}());



/***/ }),

/***/ "../../../../../src/app/stores/spells/spells.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = SpellsReducer;
/* unused harmony export selectIds */
/* unused harmony export selectEntities */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectAll; });
/* unused harmony export selectTotal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spell_meta_datas_spell_meta_datas_actions__ = __webpack_require__("../../../../../src/app/stores/spell-meta-datas/spell-meta-datas.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spells_actions__ = __webpack_require__("../../../../../src/app/stores/spells/spells.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_spell_class_enum__ = __webpack_require__("../../../../../src/app/model/spell-class.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_entity_src_create_adapter__ = __webpack_require__("../../../../@ngrx/entity/src/create_adapter.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var spellsAdapter = Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_entity_src_create_adapter__["a" /* createEntityAdapter */])({
    selectId: function (spell) { return spell.name; },
    sortComparer: false
});
var initialState = spellsAdapter.getInitialState({
    spellClass: __WEBPACK_IMPORTED_MODULE_2__model_spell_class_enum__["a" /* SpellClass */].sorcererWizard
});
function spellMetasDataToSpellsUpdate(spellMetaDatas) {
    var result = [];
    for (var key in spellMetaDatas) {
        result.push({
            id: key,
            changes: { metaData: spellMetaDatas[key] }
        });
    }
    return result;
}
function SpellsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__spells_actions__["d" /* SpellActionTypes */].SET_SPELLS:
            return spellsAdapter.addAll(action.payload, state);
        case __WEBPACK_IMPORTED_MODULE_1__spells_actions__["d" /* SpellActionTypes */].UPDATE_SPELL_CLASS:
            return __assign({}, state, { spellClass: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__spell_meta_datas_spell_meta_datas_actions__["c" /* SpellMetaDatasActionTypes */].UPDATE_SPELL_META_DATA:
            return spellsAdapter.updateOne({
                id: action.payload.spell,
                changes: { metaData: action.payload.metaData }
            }, state);
        case __WEBPACK_IMPORTED_MODULE_0__spell_meta_datas_spell_meta_datas_actions__["c" /* SpellMetaDatasActionTypes */].SET_SPELL_META_DATAS:
            return spellsAdapter.updateMany(spellMetasDataToSpellsUpdate(action.payload), state);
        default:
            return state;
    }
}
var selectIds = (_a = spellsAdapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;
var _a;
// export const selectAll = (state: State) => spellsAdapter.getSelectors().selectAll(state);


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map