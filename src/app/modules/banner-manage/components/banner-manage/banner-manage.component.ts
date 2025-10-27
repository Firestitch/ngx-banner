import {
  Component, OnInit, OnDestroy, ChangeDetectionStrategy, Input, ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FsListComponent, FsListConfig, FsListModule } from '@firestitch/list';
import { MessageType } from '@firestitch/message';

import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { Banner } from '../../../../interfaces/banner';
import { BannerComponent } from '../banner/banner.component';
import { MatIcon } from '@angular/material/icon';
import { NgStyle } from '@angular/common';


@Component({
    selector: 'fs-banner-manage',
    templateUrl: './banner-manage.component.html',
    styleUrls: ['./banner-manage.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsListModule,
        MatIcon,
        NgStyle,
    ],
})
export class BannerManageComponent implements OnInit, OnDestroy {

  @ViewChild(FsListComponent)
  public list: FsListComponent;

  @Input() public saveBanner: (banner) => Observable<Banner>;
  @Input() public loadBanners: () => Observable<Banner[]>;

  public banner: any = null;
  public MessageType = MessageType;
  public listConfig: FsListConfig;

  private _destroy$ = new Subject();

  constructor(
    private _dialog: MatDialog,
  ) { }

  public ngOnInit(): void {
    this.listConfig = {
      paging: false,
      fetch: () => {
        return this.loadBanners()
          .pipe(
            map((response) => ({ data: response })),
          );
      },
    };
  }

  public openBanner(banner): void {
    this._dialog.open(BannerComponent, {
      data: {
        banner,
        saveBanner: this.saveBanner,
      },
    })
    .afterClosed()
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(() => {
        this.list.reload();
      });    
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

}
