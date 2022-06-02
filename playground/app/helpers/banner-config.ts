import { of } from 'rxjs';
import { FsBannerConfig } from '@firestitch/banner';
import { filter } from 'rxjs/operators';
import { BannerService } from '../services';


export function bannerConfig(
  bannerService: BannerService,
): FsBannerConfig {

  return {
    loadStatus: () => {
      return of(bannerService.banner);
    },
    statusFrequency: 5,
  };
}
