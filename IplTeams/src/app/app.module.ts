import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamHeaderComponent } from './team-header/team-header.component';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamHeaderComponent,
    TeamdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
