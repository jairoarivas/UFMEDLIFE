import {Component} from '@angular/core';

import {MembersService} from '../members.service';

@Component({
	selector: 'list',
	templateUrl: 'app/authentication/list/list.template.html'
})
export class ListComponent{
	members: any;
	errorMessage: string;

	constructor(private _membersService: MembersService) {}

	ngOnInit() {
		this._membersService.list().subscribe(members  => this.members = members);
	}
}
