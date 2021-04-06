import { Component } from '@angular/core'
import { EventService } from '../events/shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../user/auth.service'

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .navbar { display: block; ; padding-bottom: 50px; margin-bottom: 50px; height: 40px; width: 100% }
    li { padding: 0 10px 0 10px }
    li > a.active { color: #F97924; }
    
  `]
})
export class NavBarComponent {
  
  constructor(public auth: AuthService) {
    
  }
}