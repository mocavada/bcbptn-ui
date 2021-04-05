import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model'

@Component({
 template: `
  <!-- <carousel-main></carousel-main> -->


  <h1>Upcoming Angular Events</h1>
  <div class="row">
        <div *ngFor="let event of events" class="col-6">
          <event-thumbnail [event]="event"></event-thumbnail>
        </div>
  </div>
  `,
  styles: [`
    h1 { font-size: 25px; padding-left: 10px }
  `]
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(private eventService: EventService, 
              private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data.events;
  }
}
