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
var core_1 = require("@angular/core");
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
            templateUrl: './fs-banner.component.html',
            styleUrls: ['./fs-banner.component.css'],
            encapsulation: core_1.ViewEncapsulation.Native
        }),
        __metadata("design:paramtypes", [])
    ], FsBannerComponent);
    return FsBannerComponent;
}());
exports.FsBannerComponent = FsBannerComponent;
//# sourceMappingURL=fs-banner.component.js.map