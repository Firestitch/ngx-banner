"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var material_1 = require("@angular/material");
var fs_banner_component_1 = require("./components/fs-banner-component");
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
//# sourceMappingURL=fs-banner.module.js.map