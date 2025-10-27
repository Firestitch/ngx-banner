import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BannerComponent } from '../../src/app/modules/banner/components/banner/banner.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, BannerComponent],
})
export class AppComponent {
}
