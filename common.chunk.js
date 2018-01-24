webpackJsonp(["common"],{

/***/ "../../../../../src/app/pipes/level.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LevelPipe = (function () {
    function LevelPipe() {
    }
    LevelPipe.prototype.transform = function (spells, level, spellClass) {
        if (!level || level.length === 0) {
            return [];
        }
        return spells.filter(function (spell) { return spell.level.includes(spellClass + ' ' + level); });
    };
    LevelPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'level'
        }),
        __metadata("design:paramtypes", [])
    ], LevelPipe);
    return LevelPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/more-detail/more-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<i \n  class=\"fa fa-ellipsis-h btn-sm btn-primary btn-fab\" \n  aria-hidden=\"true\"\n  (click)=\"onClick()\"\n  ></i>"

/***/ }),

/***/ "../../../../../src/app/shared/components/more-detail/more-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i.fa-ellipsis-h {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/more-detail/more-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoreDetailComponent = (function () {
    function MoreDetailComponent() {
        this.text = '';
    }
    MoreDetailComponent.prototype.ngOnInit = function () {
    };
    MoreDetailComponent.prototype.onClick = function () {
        alert(this.text);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MoreDetailComponent.prototype, "text", void 0);
    MoreDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-more-detail',
            template: __webpack_require__("../../../../../src/app/shared/components/more-detail/more-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/more-detail/more-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MoreDetailComponent);
    return MoreDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/number-picker/number-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <i \n    *ngIf=\"!disabled\" \n    [class.disabled]=\"value<=min\"\n    (click)=\"downClicked()\" \n    class=\"fa fa-2x fa-minus-circle\">    \n  </i>\n    <span>{{value}}</span>\n  <i \n    *ngIf=\"!disabled\" \n    [class.disabled]=\"value>=max\"\n    (click)=\"upClicked()\" \n    class=\"fa fa-2x fa-plus-circle\">\n  </i>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/number-picker/number-picker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  min-width: 7rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\ni {\n  color: #007bff;\n  cursor: pointer; }\n\ni:hover {\n  color: #004a99; }\n\ni.disabled {\n  opacity: 0;\n  pointer-events: none; }\n\nspan {\n  line-height: 2rem;\n  font-size: 1.5rem;\n  margin-right: 0.2rem;\n  margin-left: 0.2rem;\n  vertical-align: top; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/number-picker/number-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumberPickerComponent = (function () {
    function NumberPickerComponent() {
        this.min = 0;
        this.max = Number.MAX_VALUE;
        this.value = 0;
        this.disabled = false;
        this.input = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    NumberPickerComponent.prototype.ngOnInit = function () {
    };
    NumberPickerComponent.prototype.downClicked = function () {
        if (this.value > this.min) {
            this.emitInputEvent(--this.value);
        }
        else {
            this.value = this.min;
            this.emitInputEvent(this.value);
        }
    };
    NumberPickerComponent.prototype.emitInputEvent = function (value) {
        this.input.emit(value);
    };
    NumberPickerComponent.prototype.upClicked = function () {
        if (this.value < this.max) {
            this.emitInputEvent(++this.value);
        }
        else {
            this.value = this.max;
            this.emitInputEvent(this.value);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], NumberPickerComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], NumberPickerComponent.prototype, "min", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], NumberPickerComponent.prototype, "max", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], NumberPickerComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], NumberPickerComponent.prototype, "disabled", void 0);
    NumberPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-number-picker',
            template: __webpack_require__("../../../../../src/app/shared/components/number-picker/number-picker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/number-picker/number-picker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NumberPickerComponent);
    return NumberPickerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_level_pipe__ = __webpack_require__("../../../../../src/app/pipes/level.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_number_picker_number_picker_component__ = __webpack_require__("../../../../../src/app/shared/components/number-picker/number-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_more_detail_more_detail_component__ = __webpack_require__("../../../../../src/app/shared/components/more-detail/more-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pipes_level_pipe__["a" /* LevelPipe */],
                __WEBPACK_IMPORTED_MODULE_3__components_number_picker_number_picker_component__["a" /* NumberPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_more_detail_more_detail_component__["a" /* MoreDetailComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__pipes_level_pipe__["a" /* LevelPipe */],
                __WEBPACK_IMPORTED_MODULE_3__components_number_picker_number_picker_component__["a" /* NumberPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_more_detail_more_detail_component__["a" /* MoreDetailComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

});
//# sourceMappingURL=common.chunk.js.map