import {Component} from '@angular/core';

import {AffairsService} from '../affairs.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
	selector: 'list',
	templateUrl: 'app/affairs/list/list.template.html',
  styleUrls: ['app/app.styles.css']
})
export class ListComponent{
	affairs: any;
	errorMessage: string;
	currentAffair: any;
	filterBy: string;
	constructor(private _affairsService: AffairsService,private _authenticationService: AuthenticationService) {
		this._affairsService.list().subscribe(affairs  => this.affairs = affairs);
		this.filterBy = 'affairName';
	}

	isAuthorized(){
		if(this._authenticationService.user.role === 'Admin'){
			return true;
		}
		else {
			return false;
		}
	}

	ngOnInit() {
		this._affairsService.list().subscribe(affairs  => this.affairs = affairs);
	}

	filterByName(){
		this.filterBy = 'affairName';
	}

	filterByValue(){
		this.filterBy = 'value';
	}

	filterByDate(){
		this.filterBy = 'date';
		//console.log(this.filterBy);
	}

	filterByCode(){
		this.filterBy = 'Code';
	}

	deleteModal(m){
		//console.log("delete button clicked");
		//console.log(m);
		this.currentAffair = m;
	}

	delete() {
		this._affairsService.delete(this.currentAffair._id).subscribe(deletedAffair => {
			this._affairsService.list().subscribe(affairs  => this.affairs = affairs)
			this.currentAffair = undefined;
		} ,
		error => this.errorMessage = error);
	}

}
