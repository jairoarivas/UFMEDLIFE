import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';


@Component({
  selector: 'header',
  templateUrl: './app/header/header.template.html',
  styleUrls: ['app/app.styles.css']
})
export class HeaderComponent {
  user:any;

  wasClicked:boolean;
  g:HTMLCollectionOf<HTMLElement>;

  //injecting authenticationService into header component. This allows the access to user information.
  constructor(private _authenticationService: AuthenticationService) {
    this.user = _authenticationService.user;
  }

  ngOnInit(){
    this.wasClicked = false;
    this.g = document.getElementsByClassName('restOfSite') as HTMLCollectionOf<HTMLElement>;
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


}
