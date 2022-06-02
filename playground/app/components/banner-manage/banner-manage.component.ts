import { Component } from '@angular/core';
import { BannerService } from 'playground/app/services';
import { of } from 'rxjs';


@Component({
  selector: 'app-banner-manage',
  templateUrl: './banner-manage.component.html',
  styleUrls: ['./banner-manage.component.scss']
})
export class BannerManageComponent {

  public constructor(
    private _bannerSerice: BannerService,
  ) {}

  public loadBanner = () => {
    return of({
      ...this._bannerSerice.banner,
    });
  }

  public saveBanner = (banner) => {
    this._bannerSerice.banner = {
      ...banner,
    };
    
    return of(banner);
  }

}
