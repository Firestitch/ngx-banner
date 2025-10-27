import { Component, inject } from '@angular/core';
import { BannerService } from 'playground/app/services';
import { of } from 'rxjs';
import { BannerManageComponent as BannerManageComponent_1 } from '../../../../src/app/modules/banner-manage/components/banner-manage/banner-manage.component';


@Component({
    selector: 'app-banner-manage',
    templateUrl: './banner-manage.component.html',
    styleUrls: ['./banner-manage.component.scss'],
    standalone: true,
    imports: [BannerManageComponent_1]
})
export class BannerManageComponent {
  private _bannerSerice = inject(BannerService);


  public loadBanners = () => {
    return of([
      {
        ...this._bannerSerice.banner,
      }
    ]);
  }

  public saveBanner = (banner) => {
    this._bannerSerice.banner = {
      ...banner,
    };
    
    return of(banner);
  }

}
