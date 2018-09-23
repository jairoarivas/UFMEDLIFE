import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';

import { LocationStrategy, HashLocationStrategy, CommonModule, } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { HeaderModule } from './header/header.module';

import { EggsService } from './eggs/eggs.service';
import { AffairsService } from './affairs/affairs.service';

import { getInvolvedModule } from './getInvolved/getInvolved.module';
import { contactUsComponent } from './contactUs/contactUs.component';
import { HomeComponent } from './home/home.component';

import { EggsModule } from './eggs/eggs.module';
import { AffairsModule } from './affairs/affairs.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AuthenticationModule,
    HeaderModule,
    getInvolvedModule,
    EggsModule,
    AffairsModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [
    HomeComponent,
    contactUsComponent,
    AppComponent
  ],
  providers: [
    AuthenticationService,
    EggsService,
    AffairsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
