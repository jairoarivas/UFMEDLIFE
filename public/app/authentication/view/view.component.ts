import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { MembersService } from '../members.service';

@Component({
  selector: 'view',
  templateUrl: 'app/authentication/view/view.template.html',
  styleUrls: ['app/app.styles.css']
})
export class ViewComponent {
	user: any;
  member: any;
	paramsObserver: any;
	errorMessage: string;
  members:any;

	constructor(private _router:Router,
				private _route: ActivatedRoute,
				private _authenticationService: AuthenticationService, private _membersService: MembersService) {
          //this._membersService.list().subscribe(members  => this.members = members);
        }

	ngOnInit() {
		this.user = this._authenticationService.user;

		this.paramsObserver = this._route.params.subscribe(params => {
			let userId = params['userId'];
      console.log(userId);
			this._membersService
				.read(userId)
				.subscribe(
					member => {
            this.member = member
            console.log("GOT MEMBER: " + this.member);
          },
					error => this._router.navigate(['/'])
				);
		});
	}

  ngOnDestroy() {
		this.paramsObserver.unsubscribe();
	}

  // percentile() {
  //   var totalMembers;
  //   var numberUnderMember;
  //   var numPoints = this.member.points;
  //   for(var i = 0 ; i < this.members.length() ; i ++){
  //     if(this.member._id === this.members[i]._id){
  //     }
  //     else{
  //       if(numPoints > this.members[i].points){
  //         numberUnderMember ++;
  //       }
  //       totalMembers ++;
  //     }
  //   }
  //
  //   return ((numberUnderMember/totalMembers) * 100);
  // }


}
