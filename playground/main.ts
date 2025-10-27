import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { FS_BANNER_CONFIG } from '@firestitch/banner';
import { bannerConfig } from './app/helpers/banner-config';
import { BannerService } from './app/services';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FsLabelModule } from '@firestitch/label';
import { FsDatePickerModule } from '@firestitch/datepicker';
import { FsStoreModule } from '@firestitch/store';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { provideRouter, Routes } from '@angular/router';
import { ExamplesComponent } from './app/components';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
];



if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule, FsLabelModule, FsDatePickerModule.forRoot(), FsStoreModule, FsExampleModule.forRoot(), FsMessageModule.forRoot()),
        { provide: FS_BANNER_CONFIG,
            useFactory: bannerConfig,
            deps: [BannerService],
        },
        provideAnimations(),
        provideRouter(routes),
    ]
})
  .catch(err => console.error(err));

