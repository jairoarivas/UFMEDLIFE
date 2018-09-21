import { Component } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MembersService } from './members.service';
import { EventsService } from '../events/events.service';

@Component({
  selector: 'authentication',
  templateUrl: 'app/authentication/authentication.template.html',
})
export class AuthenticationComponent{ }
