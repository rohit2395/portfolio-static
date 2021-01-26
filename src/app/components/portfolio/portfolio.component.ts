import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from 'src/app/services/sidenave.service';
import { onMainContentChange } from '../../animations/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [ onMainContentChange ]
})
export class PortfolioComponent implements OnInit {

  
  
  public onSideNavChange: boolean;

  
  constructor(private _sidenavService: SidenavService) { 
    console.log("in portfolio");
    this._sidenavService.sideNavState$.subscribe( res => {
      console.log(res)
      this.onSideNavChange = res;
    })
  }

  ngOnInit(): void {
  }

}
