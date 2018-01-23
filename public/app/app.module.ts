import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule, RequestOptions } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationModule } from './authentication/authentication.module';
import {getInvolvedModule } from './getInvolved/getInvolved.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { contactUsComponent } from './contactUs/contactUs.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';


import { EventsModule } from './events/events.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    AuthenticationModule,
    getInvolvedModule,
    EventsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    CarouselComponent,
    contactUsComponent,
    AppComponent
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
