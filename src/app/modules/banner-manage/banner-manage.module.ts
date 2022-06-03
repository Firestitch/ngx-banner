import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { FsFormModule } from '@firestitch/form';
import { FsLabelModule } from '@firestitch/label';
import { FsSkeletonModule } from '@firestitch/skeleton';
import { FsListModule } from '@firestitch/list';
import { FsIconPickerModule } from '@firestitch/icon-picker';
import { FsColorPickerModule } from '@firestitch/colorpicker';
import { FsDialogModule } from '@firestitch/dialog';

import { BannerManageComponent, BannerComponent } from './components';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,

    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,

    FsFormModule,
    FsIconPickerModule,
    FsColorPickerModule,
    FsSkeletonModule,
    FsLabelModule,
    FsListModule,
    FsDialogModule,
  ],
  declarations: [
    BannerManageComponent,
    BannerComponent,
  ],
  exports: [
    BannerManageComponent,
  ],
})
export class FsBannerManageModule { }
