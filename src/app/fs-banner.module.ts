import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FsBannerComponent } from './components/banner/banner.component';


@NgModule({
  imports: [
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
  /*static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsBannerModule,
      providers: []
    };
  }*/
}
