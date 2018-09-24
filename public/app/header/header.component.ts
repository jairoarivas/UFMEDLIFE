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
  c:HTMLCollectionOf<HTMLElement>;

  //injecting authenticationService into header component. This allows the access to user information.
  constructor(private _authenticationService: AuthenticationService, private _router: Router ) {
    this.user = _authenticationService.user;
    //console.log(!!this.user);
  }
  ngOnInit(){
    this.wasClicked = false;
    this.dropped = false;
    this.g = document.getElementsByClassName('restOfSite') as HTMLCollectionOf<HTMLElement>;
    this.c = document.getElementsByClassName('clicked') as HTMLCollectionOf<HTMLElement>;
    if(this.c.length > 0){
      for(var i = 0; i < this.g.length; i++){
        this.g[i].style.display = 'none';
      }
    }
    else{
      for(var i = 0; i < this.g.length; i++){
        this.g[i].style.display = 'block';
      }
    }
    this.d = document.getElementById('dropDown') as HTMLElement;
    this.d.style.display = 'none';
  }

  isAuthorized(){
    console.log(this._authenticationService.user);
    if(this._authenticationService.user.role === 'Admin'){
      return true;
    }
    else {
      return false;
    }
  }

  openAccount(){
    this.c = document.getElementsByClassName('clicked') as HTMLCollectionOf<HTMLElement>;
    for(var i = 0; i < this.c.length; i++){
      this.c[i].classList.remove('clicked');
    }
    this.wasClicked = false;
    this._router.navigate(['/authentication/members', this._authenticationService.user._id]);
  }

  navMenuCheck(){
    this.c = document.getElementsByClassName('clicked') as HTMLCollectionOf<HTMLElement>;
    for(var i = 0; i < this.c.length; i++){
      this.c[i].classList.remove('clicked');
    }
    for(var i = 0; i < this.g.length; i++){
      this.g[i].style.display = 'block';
    }
    this.wasClicked = false;
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
