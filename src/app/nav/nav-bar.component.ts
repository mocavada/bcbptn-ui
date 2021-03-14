import { Component } from '@angular/core'

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    nav.navbar-nav {font-size: 75px;}
    #searchForm {margin-right: 100px;}
    li > a.active { color: #F97924; }
    nav.navbar { margin-bottom: 50px; }
  `]
})
export class NavBarComponent {

}