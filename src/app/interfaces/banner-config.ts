import { Observable } from "rxjs";

export interface FsBannerConfig {
  loadBanner: (type: string) => Observable<any>;
  loadFrequency: number;
}