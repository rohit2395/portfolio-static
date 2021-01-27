import { Component, OnInit } from '@angular/core';
import { onMainContentChange } from 'src/app/animations/animations';
import { SidenavService } from 'src/app/services/sidenave.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  animations:[onMainContentChange],
})
export class BlogsComponent implements OnInit {

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
