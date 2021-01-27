import { Component, OnInit } from '@angular/core';
import { onMainContentChange } from 'src/app/animations/animations';
import { SidenavService } from 'src/app/services/sidenave.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  animations:[onMainContentChange]
})
export class FeedbackComponent implements OnInit {

  
  public onSideNavChange: boolean;

  
  constructor(private _sidenavService: SidenavService) { 
    console.log("in blog");
    this._sidenavService.sideNavState$.subscribe( res => {
      console.log(res)
      this.onSideNavChange = res;
    })
  }

  ngOnInit(): void {
  }

}
