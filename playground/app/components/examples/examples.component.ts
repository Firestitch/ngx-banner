import { Component } from '@angular/core';
import { environment } from '@env';
import { FsExampleModule } from '@firestitch/example';
import { BannerManageComponent } from '../banner-manage/banner-manage.component';


@Component({
    templateUrl: 'examples.component.html',
    standalone: true,
    imports: [FsExampleModule, BannerManageComponent]
})
export class ExamplesComponent {
  public config = environment;
}
