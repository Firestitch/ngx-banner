import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CdkScrollable } from '@angular/cdk/scrolling';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { FsColorPickerModule } from '@firestitch/colorpicker';
import { FsDialogModule } from '@firestitch/dialog';
import { FsFormModule } from '@firestitch/form';
import { FsIconPickerModule } from '@firestitch/icon-picker';
import { FsLabelModule } from '@firestitch/label';
import { FsMessage, MessageType } from '@firestitch/message';
import { FsSkeletonModule } from '@firestitch/skeleton';

import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FsDialogModule,
    FsSkeletonModule,
    FormsModule,
    FsFormModule,
    MatDialogTitle,
    CdkScrollable,
    MatDialogContent,
    FsLabelModule,
    MatCheckbox,
    MatFormField,
    MatInput,
    FsColorPickerModule,
    FsIconPickerModule,
    CdkTextareaAutosize,
    MatDialogActions,
    MatButton,
    MatDialogClose,
  ],
})
export class BannerComponent implements OnInit, OnDestroy {

  public banner: any = null;
  public saveBanner: (banner) => Observable<any>;
  public MessageType = MessageType;

  private _destroy$ = new Subject();
  private _data = inject(MAT_DIALOG_DATA);
  private _dialogRef = inject<MatDialogRef<BannerComponent>>(MatDialogRef);
  private _message = inject(FsMessage);

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
