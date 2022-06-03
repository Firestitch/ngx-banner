import { of } from 'rxjs';
import { FsBannerConfig } from '@firestitch/banner';
import { filter } from 'rxjs/operators';
import { BannerService } from '../services';


export function bannerConfig(
  bannerService: BannerService,
): FsBannerConfig {

  return {
    loadBanner: (type: string) => {
      return of(bannerService.banner);
    },
    loadFrequency: 5,
  };
}
