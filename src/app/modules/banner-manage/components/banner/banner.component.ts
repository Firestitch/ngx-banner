import {
  Component, OnInit, OnDestroy, ChangeDetectionStrategy, 
  ChangeDetectorRef, Input, Inject,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FsMessage, MessageType } from '@firestitch/message';

import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnInit, OnDestroy {

  public banner: any = null;
  public saveBanner: (banner) => Observable<any>;;
  public MessageType = MessageType;

  private _destroy$ = new Subject();

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data,    
    private _dialogRef: MatDialogRef<BannerComponent>,
    private _cdRef: ChangeDetectorRef,
    private _message: FsMessage,
  ) { }

  public ngOnInit(): void {
    this.saveBanner = this._data.saveBanner;
    this.banner = this._data.banner;
  }

  public save = () => {
    return this.saveBanner(this.banner)
      .pipe(
        tap((banner) => {
          this._message.success('Saved Changes');
          this._dialogRef.close(banner);
        }),
      );
  };

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

}
