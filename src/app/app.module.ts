import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {
  JQ_TOKEN
} from './common/index'

import {
  CollapsibleWellComponent
} from './common/ui/index'


import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { Error404Component } from './errors/404.component';

import { appRoutes } from './app-routing.module';
import { LoginComponent } from './user/login.component';



@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [
   
  ],
  declarations: [	
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CollapsibleWellComponent,
    
   ],
  providers: [
    EventService,  
    EventRouteActivator,
    EventListResolver,
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState 
    }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}


function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}