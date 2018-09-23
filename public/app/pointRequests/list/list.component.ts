import {Component} from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';
import {PointRequestsService} from '../pointRequests.service';

@Component({
	selector: 'list',
	templateUrl: 'app/pointRequests/list/list.template.html',
  styleUrls: ['app/app.styles.css']
})
export class ListComponent{
	pointRequests: any;
	errorMessage: string;
	currentPointRequest: any;
	filterBy: string;
	memberRequestingPoints: any = {};
	g: HTMLElement;
  s:HTMLElement;
	eventToPush:any;
	constructor(private _pointRequestsService: PointRequestsService, private _authenticationService: AuthenticationService) {
		this._pointRequestsService.list().subscribe(pointRequests  => this.pointRequests = pointRequests);
		this.filterBy = 'date';
	}

	ngOnInit() {
		this.g = document.getElementById('errorMessage') as HTMLElement;
		this.g.style.display = 'none';
		this.s = document.getElementById('successMessage') as HTMLElement;
		this.s.style.display = 'none';
		this._pointRequestsService.list().subscribe(pointRequests  => this.pointRequests = pointRequests);
	}

	filterByName(){
		this.filterBy = 'name';
	}

	filterByValue(){
		this.filterBy = 'value';
	}

	filterByDate(){
		this.filterBy = 'date';
	}

	filterByCode(){
		this.filterBy = 'user';
	}

	deleteModal(m){
		this.s.style.display = 'none';
		this.g.style.display = 'none';
		this.currentPointRequest = m;
	}
	approveModal(pointRequest){
		this.s.style.display = 'none';
		this.g.style.display = 'none';
		this.currentPointRequest = pointRequest;
	}


	delete() {
		this._pointRequestsService.delete(this.currentPointRequest._id).subscribe(deletedPointRequest => {
			this._pointRequestsService.list().subscribe(pointRequests  => this.pointRequests = pointRequests)
			this.currentPointRequest = undefined;
		} ,
		error => this.errorMessage = error);
	}

	approve(){
		this._authenticationService.read(this.currentPointRequest.pointRequestUser._id).subscribe(member => {
			this.memberRequestingPoints = member;
			//console.log(this.memberRequestingPoints);
			this.memberRequestingPoints.points += this.currentPointRequest.pointRequestValue;
			this.eventToPush = {
				eventName: this.currentPointRequest.pointRequestName,
				eventValue: this.currentPointRequest.pointRequestValue,
				eventDate: this.currentPointRequest.pointRequestDate
			};
			this.memberRequestingPoints.attendedEvents.push(this.eventToPush);
			//console.log(this.memberRequestingPoints);
			this._authenticationService.update(this.memberRequestingPoints).subscribe(saveUser => {
				this.s.style.display = 'none';
				this.s.style.display = 'block';
				setTimeout(() => {
					this.s.style.display = 'none';
				}, 5000);

				this._pointRequestsService.delete(this.currentPointRequest._id).subscribe(deletedPointRequest => {
					this._pointRequestsService.list().subscribe(pointRequests  => this.pointRequests = pointRequests)
					this.currentPointRequest = undefined;
				} ,
				error => this.errorMessage = error);

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
		});
	}

}
