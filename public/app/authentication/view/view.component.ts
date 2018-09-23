import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { EggsService } from '../../eggs/eggs.service';

@Component({
  selector: 'view',
  templateUrl: 'app/authentication/view/view.template.html',
  styleUrls: ['app/app.styles.css']
})
export class ViewComponent {
	user: any;
  member: any = {};
	paramsObserver: any;
	errorMessage: string;
  members:any;
  count: number;

  //point request related variables
  egg:any = {};
  eventCodeRequest: string;
  g: HTMLElement;
  s:HTMLElement;
  request:any = {};

	constructor(private _router:Router, private _route: ActivatedRoute, private _authenticationService: AuthenticationService, private _eggsService: EggsService) {
    this.user = this._authenticationService.user;
    this._authenticationService.list().subscribe(members  => {
      this.count = members.length;
      this.members = members
    });
  }

	ngOnInit() {
    // this.g = document.getElementById('errorMessage') as HTMLElement;
    // this.g.style.display = 'none';
    // this.s = document.getElementById('successMessage') as HTMLElement;
    // this.s.style.display = 'none';

		this.paramsObserver = this._route.params.subscribe(params => {
			let userId = params['userId'];
			this._authenticationService
				.read(userId)
				.subscribe(
					member => {
            this.member = member;
            this._authenticationService.list().subscribe(members  => this.members = members);
          },
					error => this._router.navigate(['/'])
				);
		});
	}

  ngOnDestroy() {
		this.paramsObserver.unsubscribe();
	}

  createRequest(){
    // var alreadyRequested = false;
    // for(var i = 0; i < this.member.attendedEvents.length; i++){
    //   if(this.member.attendedEvents[i].eggName === this.egg.eggName){
    //     return true;
    //   }
    //   else{
    //     return false;
    //   }
    // }
    // console.log('AlreadyRequested: ' + alreadyRequested);
    // if(alreadyRequested){
    //   this.errorMessage = 'You have already requested points for this egg'
    //   this.g.style.display = 'none';
    //   this.g.style.display = 'block';
    //   setTimeout(() => {
    //     this.g.style.display = 'none';
    //   }, 5000);
    // }
    // else{
    //   this._requestsService.checkEvent(this.egg.eggName.replace(/\s+/g, ''),this.member._id).subscribe(requests => {
    //     //console.log('Search Results: ' + requests);
    //     // this.errorMessage = 'You have already requested points for this egg'
    //     // this.g.style.display = 'none';
    //     // this.g.style.display = 'block';
    //     // setTimeout(() => {
    //     //   this.g.style.display = 'none';
    //     // }, 5000);
    //   },
    //   error => {
    //     this.errorMessage = error;
    //     this.g.style.display = 'none';
    //     this.g.style.display = 'block';
    //     setTimeout(() => {
    //       this.g.style.display = 'none';
    //     }, 5000);
      //   this.request = {
      //     user: this.member._id,
      //     eggName:this.egg.eggName,
      //     eggValue:this.egg.eggValue,
      //     eggDate: this.egg.eggDate
      //   };
      //   this._requestsService.create(this.request).subscribe(result => {
      //     this.s.style.display = 'none';
      //     this.s.style.display = 'block';
      //     setTimeout(() => {
      //       this.s.style.display = 'none';
      //     }, 5000);
      //   },
      //   error => {
      //     this.errorMessage = 'Unable to send request';
      //     this.g.style.display = 'none';
      //     this.g.style.display = 'block';
      //     setTimeout(() => {
      //       this.g.style.display = 'none';
      //     }, 5000);
      //   }
      // );
    // }
    // );
    // }
  }

  // findEgg(){
  //   this.s.style.display = 'none';
  //   this.g.style.display = 'none';
  //   this._eggsService.readCode(this.eggCodeRequest).subscribe(egg => {
  //     this.egg = egg;
  //   },
  //   error => {
  //     this.errorMessage = 'There is no egg with that egg code';
  //     this.g.style.display = 'none';
  //     this.g.style.display = 'block';
  //     setTimeout(() => {
  //       this.g.style.display = 'none';
  //     }, 5000);
  //   }, () => {
  //     this.createRequest();
  //   });
  //   console.log(this.egg);
  // }



  percentile() {
    var totalMembers = 0;
    var numberUnderMember = 0;
    var numPoints = this.member.points;
    for(var i = 0 ; i < this.count ; i ++){
      if(this.member._id === this.members[i]._id){
      }
      else{
        //console.log(numPoints);
        if(numPoints >= this.members[i].points){
          numberUnderMember ++;
        }
        //console.log(totalMembers);
        totalMembers ++;
      }
    }
    //console.log(numberUnderMember);
    //console.log(totalMembers);
    return ((numberUnderMember/totalMembers) * 100);
  }

  EventsAttendedEmpty(){
    if(this.member.attendedEvents !== undefined){
      if(this.member.attendedEvents.length > 0){
        return false;
      }
      else {
        return true;
      }
    }
  }

}
