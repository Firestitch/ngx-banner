import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { FsBannerComponent } from './components/fs-banner-component';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    MatIconModule
  ],
  exports: [
    FsBannerComponent,
  ],
  entryComponents: [
  ],
  declarations: [
    FsBannerComponent,
  ],
  providers: [
  ],
})
export class FsBannerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsBannerModule,
      providers: []
    };
  }
}
