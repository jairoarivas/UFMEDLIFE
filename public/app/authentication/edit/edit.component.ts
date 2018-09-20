import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MembersService } from '../members.service';

@Component({
  selector: 'edit',
  templateUrl: 'app/authentication/edit/edit.template.html',
  styleUrls: ['app/app.styles.css']
})
export class EditComponent {
	member: any = {};
	errorMessage: string;
	paramsObserver: any;
  roles = ['Admin', 'Officer', 'Member'];
	constructor(private _router:Router,
				private _route: ActivatedRoute,
				private _membersService: MembersService) {}

	ngOnInit() {
		this.paramsObserver = this._route.params.subscribe(params => {
			let userId = params['userId'];

			this._membersService.read(userId).subscribe(member => {
																this.member = member;
													 		},
															error => this._router.navigate(['/authentication/members']));
		});
	}

	ngOnDestroy() {
		this.paramsObserver.unsubscribe();
	}

	update() {
		this._membersService.update(this.member).subscribe(savedUser => this._router.navigate(['authentication/members', savedUser._id]),
							 				  				 error =>  this.errorMessage = error);
	}
}
