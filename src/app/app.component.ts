import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SidenavService } from './services/sidenave.service';
import { onMainContentChange,onSideNavChange } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ onMainContentChange,onSideNavChange ]
})
export class AppComponent {


  title = 'portfolio-static';
  public onSideNavChange: boolean;

  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe( res => {
      console.log(res)
      this.onSideNavChange = res;
    })
  }
}
