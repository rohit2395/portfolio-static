import {  Component } from '@angular/core';
import { SidenavService } from './services/sidenave.service';
import { onMainContentChange,onSideNavChange, fadeAnimation} from './animations/animations';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ onMainContentChange,onSideNavChange,fadeAnimation],
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

  
  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
