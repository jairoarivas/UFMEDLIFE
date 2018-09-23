import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AffairsService } from '../affairs.service';


@Component({
  selector: 'edit',
  templateUrl: 'app/affairs/edit/edit.template.html',
  styleUrls: ['app/app.styles.css']
})
export class EditComponent {
	affair: any = {};
	errorMessage: string;
	paramsObserver: any;
  g: HTMLElement;
  s:HTMLElement;

	constructor(private _router:Router,
				private _route: ActivatedRoute,
				private _affairsService: AffairsService) {}

	ngOnInit() {
    this.g = document.getElementById('errorMessage') as HTMLElement;
    this.g.style.display = 'none';
    this.s = document.getElementById('successMessage') as HTMLElement;
    this.s.style.display = 'none';
		this.paramsObserver = this._route.params.subscribe(params => {
			let affairId = params['affairId'];

			this._affairsService.read(affairId).subscribe(affair => {
																this.affair = affair;
													 		},
															error => this._router.navigate(['/affairs']));
		});
	}

	ngOnDestroy() {
		this.paramsObserver.unsubscribe();
	}

	update() {
		this._affairsService.update(this.affair).subscribe(savedAffair =>{
      this.s.style.display = 'none';
      this.s.style.display = 'block';
      setTimeout(() => {
        this._router.navigate(['/affairs']);
      }, 1500);
    } ,
		error => {
      this.errorMessage = error;
      this.g.style.display = 'none';
      this.g.style.display = 'block';
    } );
	}
}
