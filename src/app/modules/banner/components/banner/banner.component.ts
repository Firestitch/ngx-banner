import {
  Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, Inject,
} from '@angular/core';
import { FsBannerConfig } from '../../../../interfaces';
import { FS_BANNER_CONFIG } from '../../../../injectors';

import { Subject, timer } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'fs-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnInit, OnDestroy {

  public banner: any = null;

  private _destroy$ = new Subject();

  constructor(
    @Inject(FS_BANNER_CONFIG) private _config: FsBannerConfig,
    private _cdRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    timer(0, this._config.statusFrequency * 1000)
      .pipe(
        switchMap(() => this._config.loadStatus()),
        takeUntil(this._destroy$),
      )
      .subscribe((banner) => {
        this.banner = banner?.enabled ? banner : null;
        this._cdRef.markForCheck();
      });
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

}
