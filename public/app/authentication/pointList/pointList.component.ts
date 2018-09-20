import {Component} from '@angular/core';

import {MembersService} from '../members.service';

@Component({
	selector: 'pointList',
	templateUrl: 'app/authentication/pointList/pointList.template.html',
  styleUrls: ['app/app.styles.css']
})
export class PointListComponent{
	members: any;
	errorMessage: string;

	constructor(private _membersService: MembersService) {}

	ngOnInit() {
		this._membersService.pointList().subscribe(members  => this.members = members);
	}
}
