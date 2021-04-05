import { Component, Input } from '@angular/core'
import { NotificationService } from '../common/notification.service';
import { IEvent } from './shared/index'


@Component({
  selector: 'event-thumbnail',
  template: `
   <collapsible-well>
    <div wells-title>
      {{event.name}}
      <i *ngIf="2 === 2" class="glyphicon glyphicon-envelope" style="color:red"></i>
    </div>
    <div wells-body>
      <h3>{{event.onlineUrl}}</h3>
      <h6>{{event.date}}</h6>
      <p>{{event.price}}</p>
   </div>
   </collapsible-well> 
    <div (click)="showHtmlToaster()" [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    
    <img [src]="event?.imageUrl" [alt]="event?.name" class="event-image">
      <h2>{{event?.name}}</h2>
      <i class="fas fa-user"></i> <!-- uses solid style -->
      <i class="fab fa-github-square"></i> <!-- uses brand style -->
 
      <div>Date: {{event?.date}}</div>
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
      </div>
    </div>
  `,
  styles: [`
    .thumbnail { min-height: 210px; border: 1px solid red; margin-bottom: 2px }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
    img { height: 50px;  }
  `],
})
export class EventThumbnailComponent {
  @Input()
  event!: IEvent;

  constructor( private notifyService: NotificationService) {}

  getStartTimeStyle():any {
    if (this.event && this.event.time === '8:00 am')
      return {color: '#003300', 'font-weight': 'bold'}
    return {}
  }

  showHtmlToaster(){
    this.notifyService.showHTMLMessage(this.event.name, "Thank You For Choosing")
  }
} 