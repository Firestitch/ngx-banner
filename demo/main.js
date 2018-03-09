webpackJsonp([2],{

/***/ "../node_modules/css-loader/index.js??ref--3-1!../node_modules/postcss-loader/lib/index.js??ref--3-2!../node_modules/resolve-url-loader/index.js??ref--3-3!../node_modules/sass-loader/lib/loader.js??ref--3-4!../src/components/fs-banner-component/fs-banner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":host {\n  background-color: #efefef;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 1;\n}\n\n:host input[type=\"file\"] {\n  position: fixed;\n  top: -100em;\n}\n\n:host .headers-wrapper * {\n  padding-top: 4px;\n}\n\n:host .headers-wrapper *:first-child {\n  padding-top: 0;\n}\n\n:host [fs-banner-super],\n:host [fs-banner-sub] {\n  font-size: 12px;\n}\n\n:host [fs-banner-heading] {\n  font-size: 15px;\n}\n\n:host .picture-wrapper {\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  overflow: hidden;\n  margin: 10px;\n  margin-left: 15px;\n  position: relative;\n  cursor: pointer;\n}\n\n:host .picture-wrapper .icon-container {\n  margin-bottom: -14px;\n  background-color: #fcfbfc;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  padding-top: calc(50% - 24px);\n  color: #a8a8a8;\n}\n\n:host .picture-wrapper .icon-container .material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 50px;\n  width: 50px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n}\n\n:host .picture-wrapper .change {\n  margin-top: -34px;\n  width: 100%;\n  font-size: 11px;\n  position: absolute;\n  text-align: center;\n  /* background-color: transparent; */\n  background-color: rgba(128, 128, 128, .35);\n  height: 30px;\n  padding-top: 9px;\n  /* z-index: 1; */\n}\n\n:host .picture-wrapper.hover .change {\n  display: none;\n}\n\n:host .picture-wrapper.hover:hover .change {\n  display: block;\n}\n\n:host .picture-wrapper img {\n  width: 100%;\n  height: 100%;\n}\n\n", "", {"version":3,"sources":["C:/Projects/fs-banner/src/components/fs-banner-component/C:/Projects/fs-banner/src/components/fs-banner-component/C:/Projects/fs-banner/src/components/fs-banner-component/src/components/fs-banner-component/fs-banner.component.scss","C:/Projects/fs-banner/src/components/fs-banner-component/C:/Projects/fs-banner/src/components/fs-banner-component/fs-banner.component.scss"],"names":[],"mappings":"AASA;EAEE,0BAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,oBAAA;EAEA,cAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,+BAAA;UAAA,uBAAA;EACA,oBAAA;CCVD;;ADED;EAWM,gBAAA;EACA,YAAA;CCTL;;ADHD;EAiBU,iBAAA;CCVT;;ADSK;EAGQ,eAAA;CCRb;;ADXD;;EA0BM,gBAAA;CCVL;;ADhBD;EA8BM,gBAAA;CCVL;;ADYC;EACI,YAAA;EACA,aAAA;EACA,oBAAA;EACA,iBAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;CCTL;;ADWK;EACI,qBAAA;EACA,0BAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,8BAAA;EACA,eAAA;CCRT;;ADSS;EACI,8BAAA;EACA,oBAAA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,uBAAA;EACA,qBAAA;EACA,sBAAA;EACA,oBAAA;EACA,kBAAA;EACA,eAAA;EACA,sCAAA;EACA,oCAAA;CCNb;;AD1DD;EAoEU,kBAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,oCAAA;EACA,2CAAA;EACA,aAAA;EACA,iBAAA;EAEA,iBAAA;CCPT;;ADvED;EAmFc,cAAA;CCRb;;ADWa;EACI,eAAA;CCRjB;;AD/ED;EA4FU,YAAA;EACA,aAAA;CCTT","file":"fs-banner.component.scss","sourcesContent":["// @import 'src/styles/theme.scss';\r\n// @include angular-material-theme($app-theme);\r\n// @mixin candy-carousel-theme($theme) {\r\n//     // Extract whichever individual palettes you need from the theme.\r\n//     $primary: map-get($theme, primary);\r\n//     $accent: map-get($theme, accent);\r\n\r\n\r\n// }\r\n:host {\r\n\r\n  background-color: #efefef;\r\n  align-items: center;\r\n\r\n  height: 100px;\r\n  display: flex;\r\n  box-sizing: border-box;\r\n  -webkit-box-flex: 1;\r\n\r\n  input[type=\"file\"] {\r\n      position: fixed;\r\n      top: -100em\r\n  }\r\n\r\n  .headers-wrapper {\r\n      * {\r\n          padding-top: 4px;\r\n          &:first-child {\r\n              padding-top: 0;\r\n          }\r\n      }\r\n  }\r\n\r\n  [fs-banner-super],\r\n  [fs-banner-sub] {\r\n      font-size: 12px;\r\n  }\r\n\r\n  [fs-banner-heading] {\r\n      font-size: 15px;\r\n  }\r\n  .picture-wrapper {\r\n      width: 80px;\r\n      height: 80px;\r\n      border-radius: 100%;\r\n      overflow: hidden;\r\n      margin: 10px;\r\n      margin-left: 15px;\r\n      position: relative;\r\n      cursor:pointer;\r\n\r\n      .icon-container {\r\n          margin-bottom: -14px;\r\n          background-color: #fcfbfc;\r\n          height: 100%;\r\n          width: 100%;\r\n          text-align: center;\r\n          padding-top: calc(50% - 24px);\r\n          color: #a8a8a8;\r\n          .material-icons {\r\n              font-family: 'Material Icons';\r\n              font-weight: normal;\r\n              font-style: normal;\r\n              font-size: 50px;\r\n              width: 50px;\r\n              line-height: 1;\r\n              letter-spacing: normal;\r\n              text-transform: none;\r\n              display: inline-block;\r\n              white-space: nowrap;\r\n              word-wrap: normal;\r\n              direction: ltr;\r\n              -webkit-font-feature-settings: 'liga';\r\n              -webkit-font-smoothing: antialiased;\r\n          }\r\n      }\r\n      .change {\r\n          margin-top: -34px;\r\n          width: 100%;\r\n          font-size: 11px;\r\n          position: absolute;\r\n          text-align: center;\r\n          /* background-color: transparent; */\r\n          background-color: rgba(128, 128, 128, 0.35);\r\n          height: 30px;\r\n          padding-top: 9px;\r\n\r\n          /* z-index: 1; */\r\n      }\r\n\r\n      &.hover {\r\n          .change {\r\n              display: none;\r\n          }\r\n          &:hover {\r\n              .change {\r\n                  display: block;\r\n              }\r\n          }\r\n      }\r\n      img {\r\n          width: 100%;\r\n          height: 100%;\r\n      }\r\n  }\r\n}\r\n",":host {\n  background-color: #efefef;\n  align-items: center;\n  height: 100px;\n  display: flex;\n  box-sizing: border-box;\n  -webkit-box-flex: 1;\n}\n\n:host input[type=\"file\"] {\n  position: fixed;\n  top: -100em;\n}\n\n:host .headers-wrapper * {\n  padding-top: 4px;\n}\n\n:host .headers-wrapper *:first-child {\n  padding-top: 0;\n}\n\n:host [fs-banner-super],\n:host [fs-banner-sub] {\n  font-size: 12px;\n}\n\n:host [fs-banner-heading] {\n  font-size: 15px;\n}\n\n:host .picture-wrapper {\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  overflow: hidden;\n  margin: 10px;\n  margin-left: 15px;\n  position: relative;\n  cursor: pointer;\n}\n\n:host .picture-wrapper .icon-container {\n  margin-bottom: -14px;\n  background-color: #fcfbfc;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  padding-top: calc(50% - 24px);\n  color: #a8a8a8;\n}\n\n:host .picture-wrapper .icon-container .material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 50px;\n  width: 50px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n}\n\n:host .picture-wrapper .change {\n  margin-top: -34px;\n  width: 100%;\n  font-size: 11px;\n  position: absolute;\n  text-align: center;\n  /* background-color: transparent; */\n  background-color: rgba(128, 128, 128, 0.35);\n  height: 30px;\n  padding-top: 9px;\n  /* z-index: 1; */\n}\n\n:host .picture-wrapper.hover .change {\n  display: none;\n}\n\n:host .picture-wrapper.hover:hover .change {\n  display: block;\n}\n\n:host .picture-wrapper img {\n  width: 100%;\n  height: 100%;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../src/components/fs-banner-component/fs-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"picture-wrapper\" (click)=\"fileUpload()\">\n    <input type=\"file\" #fileInput (change)=\"fileChanged($event)\"/>\n    <img [src]=\"picture\" *ngIf=\"picture\">\n    <div class=\"icon-container\" *ngIf=\"!picture\">\n        <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n    </div>\n    <div class=\"change\">\n        <span>Change</span>\n    </div>\n</div>\n<div class=\"headers-wrapper\">\n    <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../src/components/fs-banner-component/fs-banner.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js??ref--3-1!../node_modules/postcss-loader/lib/index.js??ref--3-2!../node_modules/resolve-url-loader/index.js??ref--3-3!../node_modules/sass-loader/lib/loader.js??ref--3-4!../src/components/fs-banner-component/fs-banner.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "../src/components/fs-banner-component/fs-banner.component.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var FsBannerComponent = (function () {
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
            template: __webpack_require__("../src/components/fs-banner-component/fs-banner.component.html"),
            styles: [__webpack_require__("../src/components/fs-banner-component/fs-banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FsBannerComponent);
    return FsBannerComponent;
}());
exports.FsBannerComponent = FsBannerComponent;


/***/ }),

/***/ "../src/components/fs-banner-component/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/components/fs-banner-component/fs-banner.component.ts"));


/***/ }),

/***/ "../src/fs-banner.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var common_1 = __webpack_require__("../node_modules/@angular/common/esm2015/common.js");
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
var fs_banner_component_1 = __webpack_require__("../src/components/fs-banner-component/index.ts");
var FsBannerModule = (function () {
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

/***/ "../src/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/fs-banner.module.ts"));
__export(__webpack_require__("../src/components/fs-banner-component/fs-banner.component.ts"));


/***/ }),

/***/ "../tools lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../tools lazy recursive";

/***/ }),

/***/ "../tools/assets/playground.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../tools/components/examples/examples.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-title\">{{title}}</div>\r\n<mat-tab-group>\r\n  <mat-tab label=\"Examples\">\r\n      <div class=\"examples-body\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Docs\" *ngIf=\"loaded\">\r\n    <div class=\"iframe-container\">\r\n      <iframe class=\"iframe-example ng-star-inserted\" [src]=\"submoduleUrl\"></iframe>\r\n    </div>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "../tools/components/examples/examples.component.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var FsExamplesComponent = (function () {
    function FsExamplesComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.loaded = false;
    }
    FsExamplesComponent.prototype.ngOnInit = function () {
        this._submoduleUrl = this.sanitizer
            .bypassSecurityTrustResourceUrl("https://" + this.submoduleName + ".components.firestitch.com/docs");
        this.loaded = true;
    };
    Object.defineProperty(FsExamplesComponent.prototype, "submoduleUrl", {
        get: function () {
            return this._submoduleUrl;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FsExamplesComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input('name'),
        __metadata("design:type", String)
    ], FsExamplesComponent.prototype, "submoduleName", void 0);
    FsExamplesComponent = __decorate([
        core_1.Component({
            selector: 'fs-examples',
            template: __webpack_require__("../tools/components/examples/examples.component.html")
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], FsExamplesComponent);
    return FsExamplesComponent;
}());
exports.FsExamplesComponent = FsExamplesComponent;


/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<fs-examples title=\"[Component Type] Component\">\n  <fs-example title=\"First Example\" componentName=\"first-example\">\n      <first-example></first-example>\n  </fs-example>\n</fs-examples>\n\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./app/components/first-example/first-example.component.html":
/***/ (function(module, exports) {

module.exports = "<fs-banner>\n  <div fs-banner-heading>Test</div>\n</fs-banner>\n"

/***/ }),

/***/ "./app/components/first-example/first-example.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var FirstExampleComponent = (function () {
    function FirstExampleComponent() {
    }
    FirstExampleComponent = __decorate([
        core_1.Component({
            selector: 'first-example',
            template: __webpack_require__("./app/components/first-example/first-example.component.html")
        })
    ], FirstExampleComponent);
    return FirstExampleComponent;
}());
exports.FirstExampleComponent = FirstExampleComponent;


/***/ }),

/***/ "./app/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var flex_layout_1 = __webpack_require__("../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatStepperModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
                flex_layout_1.FlexLayoutModule
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());
exports.AppMaterialModule = AppMaterialModule;


/***/ }),

/***/ "./main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var playground_module_1 = __webpack_require__("./playground.module.ts");
var platform_browser_dynamic_1 = __webpack_require__("../node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
/**
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(playground_module_1.PlaygroundModule)
        .then(decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
    case 'loading':
        document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
        break;
    case 'interactive':
    case 'complete':
    default:
        main();
}
function _domReadyHandler() {
    document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
    main();
}
function decorateModuleRef(modRef) {
    var appRef = modRef.injector.get(core_1.ApplicationRef);
    var cmpRef = appRef.components[0];
    var _ng = window.ng;
    platform_browser_1.enableDebugTools(cmpRef);
    window.ng.probe = _ng.probe;
    window.ng.coreTokens = _ng.coreTokens;
    return modRef;
}


/***/ }),

/***/ "./playground.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../tools/assets/playground.scss");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var forms_1 = __webpack_require__("../node_modules/@angular/forms/esm2015/forms.js");
var app_component_1 = __webpack_require__("./app/app.component.ts");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var src_1 = __webpack_require__("../src/index.ts");
var animations_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/animations.js");
var material_module_1 = __webpack_require__("./app/material.module.ts");
var example_1 = __webpack_require__("../node_modules/@firestitch/example/package/index.js");
var examples_component_1 = __webpack_require__("../tools/components/examples/examples.component.ts");
var first_example_component_1 = __webpack_require__("./app/components/first-example/first-example.component.ts");
var PlaygroundModule = (function () {
    function PlaygroundModule() {
    }
    PlaygroundModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                src_1.FsBannerModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.AppMaterialModule,
                forms_1.FormsModule,
                example_1.FsExampleModule,
            ],
            entryComponents: [],
            declarations: [
                app_component_1.AppComponent,
                first_example_component_1.FirstExampleComponent,
                examples_component_1.FsExamplesComponent
            ],
            providers: [],
        })
    ], PlaygroundModule);
    return PlaygroundModule;
}());
exports.PlaygroundModule = PlaygroundModule;


/***/ })

},["./main.ts"]);
//# sourceMappingURL=main.map