import { Component, OnInit, ViewChild } from '@angular/core'
import { EventService } from '../events/shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'carousel-main',
    template: `
<div class="row tn-carousel">
 <div class="col">
 <ngb-carousel (slide)="slideActivate($event)"
[showNavigationArrows]="true" 
[showNavigationIndicators]="true"
[interval]="1000"
[keyboard]="true"
[pauseOnHover]="true"
[wrap]="true"
[activeId]="'secondSlide'"
 
 >
  <ng-template ngbSlide>
    <div class="picsum-img-wrapper">
    <img src="assets/images/bcbp1.jpeg" alt="Slide 1">
    </div>
    <div class="carousel-caption">
      <h3>Title Goes Here</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </ng-template>
  <ng-template ngbSlide>
    <div class="picsum-img-wrapper">
    <img src="assets/images/bcbp2.jpeg" alt="Slide 1">
    </div>
    <div class="carousel-caption">
      <h3>Title Goes Here</h3>
      <p>Consectetur tortor volutpat pretium.</p>
    </div>
  </ng-template>
</ngb-carousel>
 </div>
</div>
  `,
  styles: [`
  .tn-carousel {background-color: #aaa}
  ngb-carousel {
    max-width: 500px;
    margin: 50px auto;
}

ngb-carousel img {
    width: 100%;
    outline: none;
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
export class CarouselComponent {
    slideActivate(ngbSlideEvent: NgbSlideEvent) {
        console.log(ngbSlideEvent.source);
        console.log(ngbSlideEvent.paused);
        console.log(NgbSlideEventSource.INDICATOR);
        console.log(NgbSlideEventSource.ARROW_LEFT);
        console.log(NgbSlideEventSource.ARROW_RIGHT);
      }
}