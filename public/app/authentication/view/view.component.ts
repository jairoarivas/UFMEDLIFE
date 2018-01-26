import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { MembersService } from '../members.service';

@Component({
  selector: 'view',
  templateUrl: 'app/authentication/view/view.template.html',
})
export class ViewComponent {
	user: any;
  member: any;
	routingObserver: any;
	errorMessage: string;
	allowEdit: boolean = false;

	constructor(private _router:Router,
				private _route: ActivatedRoute,
				private _authenticationService: AuthenticationService, private _membersService: MembersService) {}

	ngOnInit() {
		this.user = this._authenticationService.user

		this.routingObserver = this._route.params.subscribe(params => {
			let userId = params['userId'];

			this._membersService
				.read(userId)
				.subscribe(
					member => {
						this.member = member;
						this.allowEdit = (this.user && this.user.role === 'Admin');
		 			},
					error => this._router.navigate(['/authentication/members'])
				);
		});
	}

	ngOnDestroy() {
		this.routingObserver.unsubscribe();
	}

	delete() {
		this._membersService.delete(this.member._id).subscribe(deletedUser => this._router.navigate(['/authentication/members']),
																 error => this.errorMessage = error);
	}
}
