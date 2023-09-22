import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { FsBannerModule, FsBannerManageModule, FS_BANNER_CONFIG } from '@firestitch/banner';
import { FsLabelModule } from '@firestitch/label';
import { FsStoreModule } from '@firestitch/store';

import { AppMaterialModule } from './material.module';
import {
  ExamplesComponent
} from './components';
import { AppComponent } from './app.component';
import { BannerManageComponent } from './components/banner-manage';
import { bannerConfig } from './helpers/banner-config';
import { FsDatePickerModule } from '@firestitch/datepicker';
import { BannerService } from './services';


const routes: Routes = [
  { path: '', component: ExamplesComponent },
];

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsBannerModule,
    FsBannerManageModule,
    FsBannerModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsLabelModule,
    FsDatePickerModule.forRoot(),
    FsStoreModule,
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: FS_BANNER_CONFIG, 
      useFactory: bannerConfig, 
      deps: [BannerService],
    },
  ],
  declarations: [
    AppComponent,
    ExamplesComponent,
    BannerManageComponent,
  ],
})
export class PlaygroundModule {

}
