import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AffairsService } from '../../affairs/affairs.service';
import { PointRequestsService } from '../../pointRequests/pointRequests.service';

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
  affair:any = {};
  affairCodeRequest: string;
  g: HTMLElement;
  s:HTMLElement;
  pointRequest:any = {};

	constructor(private _router:Router, private _route: ActivatedRoute, private _authenticationService: AuthenticationService, private _affairsService: AffairsService, private _pointRequestsService: PointRequestsService) {
    this.user = this._authenticationService.user;
    this._authenticationService.list().subscribe(members  => {
      this.count = members.length;
      this.members = members
    });
  }

	ngOnInit() {
    this.g = document.getElementById('errorMessage') as HTMLElement;
    this.g.style.display = 'none';
    this.s = document.getElementById('successMessage') as HTMLElement;
    this.s.style.display = 'none';

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
    var alreadyRequested = false;
    //console.log(this.member.attendedEvents.length);
    //console.log(this.member.attendedEvents[0].eventName);
    //console.log(this.affair.affairName);
    for(var i = 0; i < this.member.attendedEvents.length; i++){
      if(this.member.attendedEvents[i].eventName === this.affair.affairName){
        alreadyRequested = true;
      }
    }
    //console.log('AlreadyRequested: ' + alreadyRequested);
    if(alreadyRequested){
      this.errorMessage = 'You have already recieved points for this event'
      this.g.style.display = 'none';
      this.g.style.display = 'block';
      setTimeout(() => {
        this.g.style.display = 'none';
      }, 5000);
    }
    else{
      this._pointRequestsService.checkRequest(this.affair.affairName.replace(/\s+/g, ''),this.member).subscribe(requests => {
        //console.log(requests);
        if(requests.length > 0){
          this.errorMessage = 'Your previous request for this event is still being approved'
          this.g.style.display = 'none';
          this.g.style.display = 'block';
          setTimeout(() => {
            this.g.style.display = 'none';
          }, 5000);
        }
        else {
          this.pointRequest = {
            pointRequestUser: this.member,
            pointRequestName:this.affair.affairName,
            pointRequestValue:this.affair.affairValue,
            pointRequestDate: this.affair.affairDate
          };
          this._pointRequestsService.create(this.pointRequest).subscribe(result => {
            this.s.style.display = 'none';
            this.s.style.display = 'block';
            setTimeout(() => {
              this.s.style.display = 'none';
            }, 5000);
          },
          error => {
            this.errorMessage = 'Unable to send request';
            this.g.style.display = 'none';
            this.g.style.display = 'block';
            setTimeout(() => {
              this.g.style.display = 'none';
            }, 5000);
          }
        );
      }
      },
      error => {
        this.errorMessage = error;
        this.g.style.display = 'none';
        this.g.style.display = 'block';
        setTimeout(() => {
          this.g.style.display = 'none';
        }, 5000);
      }
      );
    }
  }

  findAffair(){
    this.s.style.display = 'none';
    this.g.style.display = 'none';
    this._affairsService.readCode(this.affairCodeRequest).subscribe(affair => {
      this.affair = affair;
    },
    error => {
      this.errorMessage = 'There is no event with that event code';
      this.g.style.display = 'none';
      this.g.style.display = 'block';
      setTimeout(() => {
        this.g.style.display = 'none';
      }, 5000);
    }, () => {
      //console.log(this.affair);
      this.createRequest();
    });

  }



  percentile() {
    var totalMembers = 0;
    var numberUnderMember = 0;
    var numPoints = this.member.points;
    for(var i = 0 ; i < this.count ; i ++){
      //console.log(numPoints);
      if(numPoints > this.members[i].points){
        numberUnderMember ++;
      }
      //console.log(totalMembers);
      totalMembers ++;
    }
    //console.log(numberUnderMember);
    //console.log(totalMembers);
    return Math.floor(((numberUnderMember/totalMembers) * 100));
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
