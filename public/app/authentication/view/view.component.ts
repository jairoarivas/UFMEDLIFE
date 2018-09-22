import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

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

	constructor(private _router:Router, private _route: ActivatedRoute, private _authenticationService: AuthenticationService) {
    this._authenticationService.list().subscribe(members  => {
      this.count = members.length;
      this.members = members
    });
  }

	ngOnInit() {
		this.user = this._authenticationService.user;

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

  eventsAttendedEmpty(){
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
