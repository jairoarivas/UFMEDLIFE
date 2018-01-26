import { Component } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MembersService } from './members.service';

@Component({
  selector: 'authentication',
  templateUrl: 'app/authentication/authentication.template.html',
  providers: [MembersService]
})
export class AuthenticationComponent{ }
