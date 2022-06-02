import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { FsHtmlEditorModule } from '@firestitch/html-editor';

import { OfflineComponent } from './components';


@NgModule({
  imports: [
    CommonModule,

    MatCardModule,

    FsHtmlEditorModule,
  ],
  declarations: [
    OfflineComponent,
  ],
  exports: [
    OfflineComponent,
  ],
})
export class FsOfflineModule { }
