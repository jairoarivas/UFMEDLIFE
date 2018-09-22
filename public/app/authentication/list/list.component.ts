import {Component} from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
	selector: 'list',
	templateUrl: 'app/authentication/list/list.template.html',
  styleUrls: ['app/app.styles.css']
})
export class ListComponent{
	members: any;
	errorMessage: string;
	filterBy: string;
	currentMember: any;
	user: any;

	constructor(private _router:Router, private _route: ActivatedRoute, private _authenticationService: AuthenticationService) {
					this._authenticationService.list().subscribe(members  => this.members = members);
					this.user = this._authenticationService.user;
				}

	ngOnInit() {
		this.filterBy = 'firstName';
	}

	filterByRole(){
		this.filterBy = 'role';
	}

	filterByfirstName(){
		this.filterBy = 'firstName';
	}

	filterBylastName(){
		this.filterBy = 'lastName';
	}

	filterByEmail(){
		this.filterBy = 'email';
	}

	filterByPoints(){
		this.filterBy = 'points';
	}

	deleteModal(m){
		// console.log("delete button clicked");
		// console.log(m);
		this.currentMember = m;
	}

	memberViewPage(member){
		this._router.navigate(['/authentication/members', member]);
	}

	delete() {
		this._authenticationService.delete(this.currentMember._id).subscribe(deletedUser => {
			this._authenticationService.list().subscribe(members  => this.members = members);
			this.currentMember = undefined;
		},
		error => this.errorMessage = error);
	}

}
