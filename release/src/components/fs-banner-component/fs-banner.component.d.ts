import { ElementRef, Renderer, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
export declare class FsBannerComponent {
    private matIconRegistry;
    private domSanitizer;
    private renderer;
    picture: string;
    icon: string;
    hover: boolean;
    upload: EventEmitter<any>;
    fileInput: ElementRef;
    constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer, renderer: Renderer);
    _upload(): void;
    fileChanged($event: any): void;
}
