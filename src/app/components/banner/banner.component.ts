import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';


@Component({
  selector: 'fs-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsBannerComponent {
  @Input('fsBannerPicture') picture: string;
  @Input('fsBannerIcon') icon: string;

  @Output('fsBannerOnUpload') onUpload: EventEmitter<any> = new EventEmitter<any>(true);

  @ViewChild('fileInput', { static: true }) fileInput: ElementRef;

  constructor() {
  }

  public fileUpload() {
    const el: HTMLElement = this.fileInput.nativeElement as HTMLElement;
    el.click();
  }

  public fileChanged($event) {
    if ($event && $event.path && $event.path[0] && $event.path[0].files) {
      this.onUpload.emit($event.path[0].files[0])
    }
  }
}
