(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/material"));
	else if(typeof define === 'function' && define.amd)
		define("@firestitch/banner", ["@angular/core", "@angular/common", "@angular/material"], factory);
	else if(typeof exports === 'object')
		exports["@firestitch/banner"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/material"));
	else
		root["@firestitch/banner"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/material"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE__angular_common__, __WEBPACK_EXTERNAL_MODULE__angular_material__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./components/fs-banner-component/fs-banner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":host {\n  background-color: #efefef;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 1;\n}\n\n:host input[type=\"file\"] {\n  position: fixed;\n  top: -100em;\n}\n\n:host .headers-wrapper * {\n  padding-top: 4px;\n}\n\n:host .headers-wrapper *:first-child {\n  padding-top: 0;\n}\n\n:host [fs-banner-super],\n:host [fs-banner-sub] {\n  font-size: 12px;\n}\n\n:host [fs-banner-heading] {\n  font-size: 15px;\n}\n\n:host .picture-wrapper {\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  overflow: hidden;\n  margin: 10px;\n  margin-left: 15px;\n  position: relative;\n  cursor: pointer;\n}\n\n:host .picture-wrapper .icon-container {\n  margin-bottom: -14px;\n  background-color: #fcfbfc;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  padding-top: calc(50% - 24px);\n  color: #a8a8a8;\n}\n\n:host .picture-wrapper .icon-container .material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 50px;\n  width: 50px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n}\n\n:host .picture-wrapper .change {\n  margin-top: -34px;\n  width: 100%;\n  font-size: 11px;\n  position: absolute;\n  text-align: center;\n  /* background-color: transparent; */\n  background-color: rgba(128, 128, 128, .35);\n  height: 30px;\n  padding-top: 9px;\n  /* z-index: 1; */\n}\n\n:host .picture-wrapper.hover .change {\n  display: none;\n}\n\n:host .picture-wrapper.hover:hover .change {\n  display: block;\n}\n\n:host .picture-wrapper img {\n  width: 100%;\n  height: 100%;\n}\n\n", "", {"version":3,"sources":["/Users/mendor/work/fs-banner/src/components/fs-banner-component/src/components/fs-banner-component/fs-banner.component.scss","/Users/mendor/work/fs-banner/fs-banner.component.scss"],"names":[],"mappings":"AASA;EAEE,0BAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,oBAAA;EAEA,cAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,+BAAA;UAAA,uBAAA;EACA,oBAAA;CCVD;;ADED;EAWM,gBAAA;EACA,YAAA;CCTL;;ADHD;EAiBU,iBAAA;CCVT;;ADSK;EAGQ,eAAA;CCRb;;ADXD;;EA0BM,gBAAA;CCVL;;ADhBD;EA8BM,gBAAA;CCVL;;ADYC;EACI,YAAA;EACA,aAAA;EACA,oBAAA;EACA,iBAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;CCTL;;ADWK;EACI,qBAAA;EACA,0BAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,8BAAA;EACA,eAAA;CCRT;;ADSS;EACI,8BAAA;EACA,oBAAA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,uBAAA;EACA,qBAAA;EACA,sBAAA;EACA,oBAAA;EACA,kBAAA;EACA,eAAA;EACA,sCAAA;EACA,oCAAA;CCNb;;AD1DD;EAoEU,kBAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,oCAAA;EACA,2CAAA;EACA,aAAA;EACA,iBAAA;EAEA,iBAAA;CCPT;;ADvED;EAmFc,cAAA;CCRb;;ADWa;EACI,eAAA;CCRjB;;AD/ED;EA4FU,YAAA;EACA,aAAA;CCTT","file":"fs-banner.component.scss","sourcesContent":["// @import 'src/styles/theme.scss';\n// @include angular-material-theme($app-theme);\n// @mixin candy-carousel-theme($theme) {\n//     // Extract whichever individual palettes you need from the theme.\n//     $primary: map-get($theme, primary);\n//     $accent: map-get($theme, accent);\n\n\n// }\n:host {\n\n  background-color: #efefef;\n  align-items: center;\n\n  height: 100px;\n  display: flex;\n  box-sizing: border-box;\n  -webkit-box-flex: 1;\n\n  input[type=\"file\"] {\n      position: fixed;\n      top: -100em\n  }\n\n  .headers-wrapper {\n      * {\n          padding-top: 4px;\n          &:first-child {\n              padding-top: 0;\n          }\n      }\n  }\n\n  [fs-banner-super],\n  [fs-banner-sub] {\n      font-size: 12px;\n  }\n\n  [fs-banner-heading] {\n      font-size: 15px;\n  }\n  .picture-wrapper {\n      width: 80px;\n      height: 80px;\n      border-radius: 100%;\n      overflow: hidden;\n      margin: 10px;\n      margin-left: 15px;\n      position: relative;\n      cursor:pointer;\n\n      .icon-container {\n          margin-bottom: -14px;\n          background-color: #fcfbfc;\n          height: 100%;\n          width: 100%;\n          text-align: center;\n          padding-top: calc(50% - 24px);\n          color: #a8a8a8;\n          .material-icons {\n              font-family: 'Material Icons';\n              font-weight: normal;\n              font-style: normal;\n              font-size: 50px;\n              width: 50px;\n              line-height: 1;\n              letter-spacing: normal;\n              text-transform: none;\n              display: inline-block;\n              white-space: nowrap;\n              word-wrap: normal;\n              direction: ltr;\n              -webkit-font-feature-settings: 'liga';\n              -webkit-font-smoothing: antialiased;\n          }\n      }\n      .change {\n          margin-top: -34px;\n          width: 100%;\n          font-size: 11px;\n          position: absolute;\n          text-align: center;\n          /* background-color: transparent; */\n          background-color: rgba(128, 128, 128, 0.35);\n          height: 30px;\n          padding-top: 9px;\n\n          /* z-index: 1; */\n      }\n\n      &.hover {\n          .change {\n              display: none;\n          }\n          &:hover {\n              .change {\n                  display: block;\n              }\n          }\n      }\n      img {\n          width: 100%;\n          height: 100%;\n      }\n  }\n}\n",":host {\n  background-color: #efefef;\n  align-items: center;\n  height: 100px;\n  display: flex;\n  box-sizing: border-box;\n  -webkit-box-flex: 1;\n}\n\n:host input[type=\"file\"] {\n  position: fixed;\n  top: -100em;\n}\n\n:host .headers-wrapper * {\n  padding-top: 4px;\n}\n\n:host .headers-wrapper *:first-child {\n  padding-top: 0;\n}\n\n:host [fs-banner-super],\n:host [fs-banner-sub] {\n  font-size: 12px;\n}\n\n:host [fs-banner-heading] {\n  font-size: 15px;\n}\n\n:host .picture-wrapper {\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  overflow: hidden;\n  margin: 10px;\n  margin-left: 15px;\n  position: relative;\n  cursor: pointer;\n}\n\n:host .picture-wrapper .icon-container {\n  margin-bottom: -14px;\n  background-color: #fcfbfc;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  padding-top: calc(50% - 24px);\n  color: #a8a8a8;\n}\n\n:host .picture-wrapper .icon-container .material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 50px;\n  width: 50px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n}\n\n:host .picture-wrapper .change {\n  margin-top: -34px;\n  width: 100%;\n  font-size: 11px;\n  position: absolute;\n  text-align: center;\n  /* background-color: transparent; */\n  background-color: rgba(128, 128, 128, 0.35);\n  height: 30px;\n  padding-top: 9px;\n  /* z-index: 1; */\n}\n\n:host .picture-wrapper.hover .change {\n  display: none;\n}\n\n:host .picture-wrapper.hover:hover .change {\n  display: block;\n}\n\n:host .picture-wrapper img {\n  width: 100%;\n  height: 100%;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./components/fs-banner-component/fs-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"picture-wrapper\" (click)=\"fileUpload()\" [class.hover]=\"hover\">\n    <input type=\"file\" #fileInput (change)=\"fileChanged($event)\"/>\n    <img [src]=\"picture\" *ngIf=\"picture\">\n    <div class=\"icon-container\" *ngIf=\"!picture\">\n        <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n    </div>\n    <div class=\"change\">\n        <span>Change</span>\n    </div>\n</div>\n<div class=\"headers-wrapper\">\n    <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./components/fs-banner-component/fs-banner.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./components/fs-banner-component/fs-banner.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./components/fs-banner-component/fs-banner.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("@angular/core");
var FsBannerComponent = /** @class */ (function () {
    function FsBannerComponent() {
        this.onUpload = new core_1.EventEmitter(true);
    }
    FsBannerComponent.prototype.fileUpload = function () {
        var el = this.fileInput.nativeElement;
        el.click();
    };
    FsBannerComponent.prototype.fileChanged = function ($event) {
        if ($event && $event.path && $event.path[0] && $event.path[0].files)
            this.onUpload.emit($event.path[0].files[0]);
    };
    __decorate([
        core_1.Input('fsBannerPicture'),
        __metadata("design:type", String)
    ], FsBannerComponent.prototype, "picture", void 0);
    __decorate([
        core_1.Input('fsBannerIcon'),
        __metadata("design:type", String)
    ], FsBannerComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Output('fsBannerOnUpload'),
        __metadata("design:type", core_1.EventEmitter)
    ], FsBannerComponent.prototype, "onUpload", void 0);
    __decorate([
        core_1.ViewChild('fileInput'),
        __metadata("design:type", core_1.ElementRef)
    ], FsBannerComponent.prototype, "fileInput", void 0);
    FsBannerComponent = __decorate([
        core_1.Component({
            selector: 'fs-banner',
            template: __webpack_require__("./components/fs-banner-component/fs-banner.component.html"),
            styles: [__webpack_require__("./components/fs-banner-component/fs-banner.component.scss")],
            encapsulation: core_1.ViewEncapsulation.Native
        }),
        __metadata("design:paramtypes", [])
    ], FsBannerComponent);
    return FsBannerComponent;
}());
exports.FsBannerComponent = FsBannerComponent;


/***/ }),

/***/ "./components/fs-banner-component/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./components/fs-banner-component/fs-banner.component.ts"));


/***/ }),

/***/ "./fs-banner.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var material_1 = __webpack_require__("@angular/material");
// Components
var fs_banner_component_1 = __webpack_require__("./components/fs-banner-component/fs-banner.component.ts");
var FsBannerModule = /** @class */ (function () {
    function FsBannerModule() {
    }
    FsBannerModule_1 = FsBannerModule;
    FsBannerModule.forRoot = function () {
        return {
            ngModule: FsBannerModule_1,
            providers: []
        };
    };
    FsBannerModule = FsBannerModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                // Angular
                common_1.CommonModule,
                material_1.MatIconModule
            ],
            exports: [
                fs_banner_component_1.FsBannerComponent,
            ],
            entryComponents: [],
            declarations: [
                fs_banner_component_1.FsBannerComponent,
            ],
            providers: [],
        })
    ], FsBannerModule);
    return FsBannerModule;
    var FsBannerModule_1;
}());
exports.FsBannerModule = FsBannerModule;


/***/ }),

/***/ "./index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./fs-banner.module.ts"));
__export(__webpack_require__("./components/fs-banner-component/index.ts"));


/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_common__;

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;

/***/ }),

/***/ "@angular/material":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_material__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.map