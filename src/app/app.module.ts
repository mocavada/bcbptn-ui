import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventAppComponent } from './event-app/event-app.component';
import { EventListComponent } from './event-app/event-list.component';

@NgModule({
  declarations: [	
    AppComponent,
    EventAppComponent,
    EventListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
