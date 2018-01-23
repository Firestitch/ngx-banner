import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FsBannerModule }  from '@firestitch/banner';

@Component({
  selector: 'app-root',
  templateUrl: 'template.html',
  styleUrls: [ 'styles.css' ],
  encapsulation: ViewEncapsulation.None
})
class AppComponent {
  constructor() {}

  ngOnInit() {  
  }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, FsBannerModule, BrowserAnimationsModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
