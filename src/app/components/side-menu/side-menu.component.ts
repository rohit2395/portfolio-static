import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { animateText, onSideNavChange } from 'src/app/animations/animations';
import { SidenavService } from 'src/app/services/sidenave.service';


interface Page {
  link: string;
  fragment: string;
  name: string;
  icon: string;
}


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class SideMenuComponent implements OnInit {

  activeFragment : any;

  public sideNavState: boolean = true;

  public pages: Page[] = [
    {name: 'Home', link:'/home',fragment:undefined,icon: 'home'},
    {name: 'Skills', link:'/home',fragment:'skills', icon: 'star'},
    {name: 'Work Experience', link:'/home',fragment:'experience', icon: 'work'},
    // {name: 'Other Projects', link:'/home',fragment:'projects', icon: 'build'},
    {name: 'Contact Me', link:'/home',fragment:'contact',icon: 'person'},
    // {name: 'Personal Blog', link:'/blogs',fragment:undefined,icon: 'article'},
    // {name: 'Give your feedback', link:'/feedback',fragment:undefined,icon: 'email'},
    
  ]

  constructor(private _sidenavService: SidenavService,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => { this.activeFragment = fragment; });
  }

  ngAfterViewChecked(): void {
    try {
        if(this.activeFragment) {
            document.querySelector('#' + this.activeFragment).scrollIntoView();
        }
    } catch (e) { }
  }

}
