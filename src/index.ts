import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FsBannerComponent } from './fsbanner.component';

export * from './fsbanner.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
],
declarations: [
    FsBannerComponent
],
providers: [
],
exports: [
    FsBannerComponent
]
})
export class FsBannerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsBannerModule,
      providers: []
    };
  }
}
