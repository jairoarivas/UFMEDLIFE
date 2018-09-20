import { Component, NgZone } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './app/header/header.template.html',
  styleUrls: ['app/app.styles.css'],
  providers: [AuthenticationService],
})
export class HeaderComponent{
  user:any;
  wasClicked:boolean;
  g:HTMLCollectionOf<HTMLElement>;
  errorMessage: string;
  userLoggedIn: boolean;
  navigationSubscription;

  //injecting authenticationService into header component. This allows the access to user information.
  constructor(private _authenticationService: AuthenticationService, private _router: Router ) {
  this.user = this._authenticationService.user;
  this.navigationSubscription = this._router.events.subscribe((e:any) => {
    if( e instanceof NavigationStart){
      this.initialiseInvites();
    }
  });
    //console.log(!!this.user);
    //this._authenticationService.refreshUser().subscribe(result => this.user = result, error => this.errorMessage = error);
  }
  test(){
    this._router.navigate([{outlets: {header: ['']}}]);
  }
  initialiseInvites(){
     this.user = this._authenticationService.user;
  }
  ngOnInit(){
    this.wasClicked = false;
    this.g = document.getElementsByClassName('restOfSite') as HTMLCollectionOf<HTMLElement>;
    //this.userLoggedIn = false;
    //this.user = this._authenticationService.user;
  }
  ngOnDestroy(){
    if(this.navigationSubscription){
      this.navigationSubscription.unsubscribe();
    }
  }



  // isLoggedIn(){
  //  console.log(!!this.user);
  //  //this.ngZone.run(() =>{
  //
  //    if(this._authenticationService.isLoggedIn()){
  //      this.userLoggedIn = true;
  //    }
  //    else{
  //      this.userLoggedIn = false;
  //    }
  //  //} );
  //  console.log(this.userLoggedIn);
  //  return this.userLoggedIn;
  // }

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
