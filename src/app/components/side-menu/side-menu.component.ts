import { Component, OnInit } from '@angular/core';
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

  
  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: Page[] = [
    {name: 'Home', link:'some-link', icon: 'home'},
    {name: 'Skills', link:'some-link', icon: 'star'},
    {name: 'Work Experience', link:'some-link', icon: 'work'},
    {name: 'Other Projects', link:'some-link', icon: 'build'},
    {name: 'Contact Me', link:'some-link', icon: 'chat'},
    
  ]

  constructor(private _sidenavService: SidenavService) { }

  ngOnInit(): void {
  }


}
