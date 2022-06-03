import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class BannerService {

  public banner = {
    enabled: false,
    message: 'Hello',
    icon: 'info',
    color: '#00B0F0',
    button: true,
    buttonUrl: 'https://google.com',
    buttonLabel: 'Visit Google',
    type: 'default',
    name: 'Default',
  };
  
}
