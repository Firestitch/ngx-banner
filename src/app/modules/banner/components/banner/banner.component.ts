import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, inject } from '@angular/core';

import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { Subject, timer } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { FS_BANNER_CONFIG } from '../../../../injectors';
import { FsBannerConfig } from '../../../../interfaces';


@Component({
  selector: 'fs-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgStyle,
    MatIcon,
    MatAnchor,
  ],
})
export class BannerComponent implements OnInit, OnDestroy {
  private _config = inject<FsBannerConfig>(FS_BANNER_CONFIG);
  private _cdRef = inject(ChangeDetectorRef);


  @Input() public type: string;

  public banner: any = null;

  private _destroy$ = new Subject();

  public ngOnInit(): void {
    timer(0, this._config.loadFrequency * 1000)
      .pipe(
        switchMap(() => this._config.loadBanner(this.type)),
        takeUntil(this._destroy$),
      )
      .subscribe((banner) => {
        this.banner = banner?.enabled ? banner : null;
        this._cdRef.markForCheck();
      });
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

}
