
import { Component, Input, ViewEncapsulation, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'fs-banner',
    templateUrl: './fs-banner.component.html',
    styleUrls: ['./fs-banner.component.scss'],
    encapsulation: ViewEncapsulation.Native
})
export class FsBannerComponent {
    @Input('fsBannerPicture') picture: string;
    @Input('fsBannerIcon') icon: string;
    @Output('fsBannerOnUpload') onUpload: EventEmitter<any> = new EventEmitter<any>(true);
    @ViewChild('fileInput') fileInput: ElementRef;
    constructor() {}

    public fileUpload() {
        let el: HTMLElement = this.fileInput.nativeElement as HTMLElement;
        el.click();
    }

    public fileChanged($event) {
        if($event && $event.path && $event.path[0] && $event.path[0].files)
            this.onUpload.emit($event.path[0].files[0])
    }
}
