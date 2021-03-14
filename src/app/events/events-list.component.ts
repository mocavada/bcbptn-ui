import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'

@Component({
 template: `
  <carousel-main></carousel-main>
  <h1>Upcoming Angular Events</h1>
  <div class="row">
        <div *ngFor="let event of events" class="col-6">
          <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
  </div>
  `,
  styles: [`
    h1 { font-size: 25px; padding-left: 10px}
    ngb-carousel {
      max-width: 700px;
      margin: 50px auto;
  }
  `]
})
export class EventsListComponent implements OnInit {
  events:any

  constructor(private eventService: EventService, private toastr: ToastrService, 
    private route:ActivatedRoute ) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName)
  }
}