import {Component} from '@angular/core';

import {EggsService} from '../eggs.service';

@Component({
	selector: 'list',
	templateUrl: 'app/eggs/list/list.template.html',
  styleUrls: ['app/app.styles.css']
})
export class ListComponent{
	eggs: any;
	errorMessage: string;
	currentEgg: any;
	filterBy: string;
	constructor(private _eggsService: EggsService) {
		this._eggsService.list().subscribe(eggs  => this.eggs = eggs);
		this.filterBy = 'eggName';
	}

	ngOnInit() {
		this._eggsService.list().subscribe(eggs  => this.eggs = eggs);
	}

	filterByName(){
		this.filterBy = 'eggName';
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
		this.currentEgg = m;
	}

	delete() {
		this._eggsService.delete(this.currentEgg._id).subscribe(deletedEgg => {
			this._eggsService.list().subscribe(eggs  => this.eggs = eggs)
			this.currentEgg = undefined;
		} ,
		error => this.errorMessage = error);
	}

}
