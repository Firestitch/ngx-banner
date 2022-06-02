import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { FsFormModule } from '@firestitch/form';
import { FsHtmlEditorModule } from '@firestitch/html-editor';
import { FsLabelModule } from '@firestitch/label';
import { FsSkeletonModule } from '@firestitch/skeleton';

import { BannerManageComponent } from './components';
import { FsIconPickerModule } from '@firestitch/icon-picker';
import { FsColorPickerModule } from '@firestitch/colorpicker';


@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,

    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,

    FsFormModule,
    FsIconPickerModule,
    FsColorPickerModule,
    FsSkeletonModule,
    FsLabelModule,

    FsHtmlEditorModule,
  ],
  declarations: [
    BannerManageComponent,
  ],
  exports: [
    BannerManageComponent,
  ],
})
export class FsBannerManageModule { }
