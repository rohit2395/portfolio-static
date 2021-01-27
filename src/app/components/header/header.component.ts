import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sidenav: MatSidenav
  
  constructor() {
    setTimeout(()=>{
      this.sidenav.toggle();
    },1000);
   }


  ngOnInit(): void {
  }


}
