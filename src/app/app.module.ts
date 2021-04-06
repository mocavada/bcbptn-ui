import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
  JQ_TOKEN,
  CollapsibleWellComponent
} from './common/index'

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent
  
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { Error404Component } from './errors/404.component';

import { appRoutes } from './app-routing.module';
import { AuthService } from './user/auth.service'


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  exports: [
   
  ],
  declarations: [	
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateSessionComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CollapsibleWellComponent,
    SessionListComponent
   ],
  providers: [
    EventService,  
    EventRouteActivator,
    EventListResolver,
    AuthService,
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState 
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}


function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}