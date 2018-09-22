import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './app/header/header.template.html',
  styleUrls: ['app/app.styles.css']
})
export class HeaderComponent{
  user:any;
  wasClicked:boolean;
  dropped:boolean;
  g:HTMLCollectionOf<HTMLElement>;
  d:HTMLElement;

  //injecting authenticationService into header component. This allows the access to user information.
  constructor(private _authenticationService: AuthenticationService, private _router: Router ) {
    this.user = _authenticationService.user;
    //console.log(!!this.user);
  }
  ngOnInit(){
    this.wasClicked = false;
    this.dropped = false;
    this.g = document.getElementsByClassName('restOfSite') as HTMLCollectionOf<HTMLElement>;
    this.d = document.getElementById('dropDown') as HTMLElement;
    this.d.style.display = 'none';
  }

  clicker(event){
    if(this.wasClicked){
      this.wasClicked = false;
      event.currentTarget.classList.remove('clicked');
      for(var i = 0; i < this.g.length; i++){
        this.g[i].style.display = 'block';
      }
    }
    else{
      event.currentTarget.classList.add('clicked');
      for(var i = 0; i < this.g.length; i++){
        this.g[i].style.display = 'none';
      }
      this.wasClicked = true;
    }
  }

  dropDown(event){
    if(this.dropped){
      this.dropped = false;
      //event.currentTarget.classList.remove('dropped');
      this.d.style.display = 'none';
    }
    else{
      //event.currentTarget.classList.add('dropped');
      this.d.style.display = 'block';
      this.dropped = true;
    }
  }


}
