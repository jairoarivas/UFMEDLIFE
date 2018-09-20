import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule, RequestOptions } from '@angular/http';


import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationModule } from './authentication/authentication.module';
//import {getInvolvedModule } from './getInvolved/getInvolved.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

//import { contactUsComponent } from './contactUs/contactUs.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

//import { itResetComponent } from './resetConfirmations/itReset.component';
//import { itSentComponent } from './resetConfirmations/itSent.component';
//import { ViewProfileComponent } from './viewProfile/viewProfile.component';

//import { EventsModule } from './events/events.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    AuthenticationModule,
    //getInvolvedModule,
    //EventsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
  
    // contactUsComponent,
    // itSentComponent,
    // ViewProfileComponent,
    // itResetComponent,
    AppComponent
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
