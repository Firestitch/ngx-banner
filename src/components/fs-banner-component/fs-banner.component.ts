import { Component, Input, ViewEncapsulation, ViewChild, ElementRef,
  Renderer, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
@Component({
    selector: 'fs-banner',
    templateUrl: './fs-banner.component.html',
    styleUrls: ['./fs-banner.component.scss'],
    encapsulation: ViewEncapsulation.Native
})
export class FsBannerComponent {
    @Input() picture: string;
    @Input() icon: string;
    @Input() hover: boolean = true;
    @Output() upload: EventEmitter<any> = new EventEmitter<any>(true);
    @ViewChild('fileInput') fileInput: ElementRef;
    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private renderer: Renderer
    )
    {
      matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')); // Or whatever path you placed mdi.svg at
    }

    public _upload() {
        let el: HTMLElement = this.fileInput.nativeElement as HTMLElement;
        el.click();
    }

    public fileChanged($event) {
        if($event && $event.path && $event.path[0] && $event.path[0].files)
            this.upload.emit($event.path[0].files[0])
    }
}
