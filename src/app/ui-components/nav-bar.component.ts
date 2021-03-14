import { Component } from '@angular/core'
import { EventService } from '../events/shared/event.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'nav-bar',
  template: `
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Logo</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="newPage.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>
  </header>
`,
  styles: [`
    // .navbar { margin-bottom: 50px; height: 40px; display: block; width: 100% }
    // nav.navbar-nav {font-size: 75px;}
    // #searchForm {margin-right: 100px;}
    // li > a.active { color: #F97924; }
    
  `]
})
export class NavBarComponent {

}