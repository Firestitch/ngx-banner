import { Observable } from "rxjs";

export interface FsBannerConfig {
  loadStatus: () => Observable<any>;
  statusFrequency: number;
}