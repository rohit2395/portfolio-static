import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { animateText, onSideNavChange } from 'src/app/animations/animations';
import { SidenavService } from 'src/app/services/sidenave.service';


interface Page {
  link: string;
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

  activeFragment = this.route.fragment.pipe() 

  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: Page[] = [
    {name: 'Home', link:'/home',icon: 'home'},
    {name: 'Skills', link:'/skills', icon: 'star'},
    {name: 'Work Experience', link:'/experience', icon: 'work'},
    {name: 'Other Projects', link:'/projects', icon: 'build'},
    {name: 'Contact Me', link:'/contact',icon: 'person'},
    {name: 'Personal Blog', link:'/blogs',icon: 'article'},
    {name: 'Give your feedback', link:'/feedback',icon: 'email'},
    
  ]

  constructor(private _sidenavService: SidenavService,public route: ActivatedRoute) { }

  ngOnInit(): void {
  }


}
