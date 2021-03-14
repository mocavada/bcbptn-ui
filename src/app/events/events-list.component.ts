import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
 template: `
 <ngb-carousel>
 <ng-template ngbSlide>
   <div class="picsum-img-wrapper">
     <img src="assets/images/bcbp1.jpeg" alt="Angular Carousel 1">
   </div>
   <div class="carousel-caption">
     <h3>Title Goes Here</h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
   </div>
 </ng-template>
 <ng-template ngbSlide>
   <div class="picsum-img-wrapper">
     <img src="assets/images/bcbp2.jpeg" alt="Angular Carousel 2">
   </div>
   <div class="carousel-caption">
     <h3>Title Goes Here</h3>
     <p>Consectetur tortor volutpat pretium.</p>
   </div>
 </ng-template>
</ngb-carousel>

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
  
  ngb-carousel img {
      width: 100%;
      outline: none;
      height: 50%;
  }
  
  ngb-carousel {
      width: inherit;
      height: inherit;
  }
  
  .carousel-inner {
      overflow: visible;
  }
  
  .carousel-item {
      display: flex !important;
      opacity: 0;
      visibility: hidden;
      transition: opacity 1.2s ease-in-out, visibility 1.2s;
      z-index: -1;
  }
  
  .carousel-item.active{
      opacity: 1;
      visibility: visible;
      z-index: 10;
  }
  
  .carousel-control-prev {
       z-index: 20;
  }
  
  
  .carousel-control-next {
       z-index: 20;
  }
  
  .carousel-indicators{
      z-index: 20;
  }
  `]
})
export class EventsListComponent implements OnInit {
  events:any

  constructor(private eventService: EventService, private toastr: ToastrService, 
    private route:ActivatedRoute, private ngbConfig: NgbConfig) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName)
  }
}