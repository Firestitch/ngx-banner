import { ElementRef, EventEmitter } from '@angular/core';
export declare class FsBannerComponent {
    picture: string;
    icon: string;
    onUpload: EventEmitter<any>;
    fileInput: ElementRef;
    constructor();
    fileUpload(): void;
    fileChanged($event: any): void;
}
