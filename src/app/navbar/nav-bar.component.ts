import { Component } from '@angular/core'
import { EventService } from '../events/shared/event.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'nav-bar',
  template: `
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="navbar-brand" href="#">True North</a>
        <ul class="navbar-nav">
          <li>
            <a [routerLink]="['/events']" routerLinkActive="active" 
            [routerLinkActiveOptions]="{exact:true}">All Events</a>
          </li>
          <li>
            <a [routerLink]="['/events/new']" routerLinkActive="active">Create Event</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Events<span class="caret"></span></a>
              <ul class="dropdown-menu">
                  <li><a href="">Angular Connect</a></li>
              </ul>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </header>
`,
  styles: [`
    .navbar { display: block; ; padding-bottom: 50px; margin-bottom: 50px; height: 40px; width: 100% }
    li { padding: 0 10px 0 10px }
    li > a.active { color: #F97924; }
    
  `]
})
export class NavBarComponent {

}