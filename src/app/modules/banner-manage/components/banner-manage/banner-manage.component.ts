import {
  Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, Input,
} from '@angular/core';

import { FsMessage, MessageType } from '@firestitch/message';

import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'fs-banner-manage',
  templateUrl: './banner-manage.component.html',
  styleUrls: ['./banner-manage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerManageComponent implements OnInit, OnDestroy {

  @Input() public saveBanner: (banner) => Observable<any>;
  @Input() public loadBanner: () => Observable<any>;

  public banner: any = null;
  public MessageType = MessageType;

  private _destroy$ = new Subject();

  constructor(
    private _cdRef: ChangeDetectorRef,
    private _message: FsMessage,
  ) { }

  public ngOnInit(): void {
    this.loadBanner()
      .subscribe((banner) => {
        this.banner = banner || {
          icon: 'info',
          color: '#29B7FF',
        };

        this._cdRef.markForCheck();
      });
  }

  public save = () => {
    return this.saveBanner(this.banner)
      .pipe(
        tap((banner) => {
          this._message.success('Saved Changes');
          this.banner = banner;
        }),
      );
  };

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

}
