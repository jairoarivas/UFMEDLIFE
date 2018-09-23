import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PointRequestsService } from '../pointRequests.service';


@Component({
  selector: 'edit',
  templateUrl: 'app/pointRequests/edit/edit.template.html',
  styleUrls: ['app/app.styles.css']
})
export class EditComponent {
	pointRequest: any = {};
	errorMessage: string;
	paramsObserver: any;
  g: HTMLElement;
  s:HTMLElement;

	constructor(private _router:Router,
				private _route: ActivatedRoute,
				private _pointRequestsService: PointRequestsService) {}

	ngOnInit() {
    this.g = document.getElementById('errorMessage') as HTMLElement;
    this.g.style.display = 'none';
    this.s = document.getElementById('successMessage') as HTMLElement;
    this.s.style.display = 'none';
		this.paramsObserver = this._route.params.subscribe(params => {
			let pointRequestId = params['pointRequestId'];

			this._pointRequestsService.read(pointRequestId).subscribe(pointRequest => {
																this.pointRequest = pointRequest;
													 		},
															error => this._router.navigate(['/pointRequests']));
		});
	}

	ngOnDestroy() {
		this.paramsObserver.unsubscribe();
	}

	update() {
		this._pointRequestsService.update(this.pointRequest).subscribe(savedPointRequest =>{
      this.s.style.display = 'none';
      this.s.style.display = 'block';
      setTimeout(() => {
        this._router.navigate(['/pointRequests']);
      }, 1500);
    } ,
		error => {
      this.errorMessage = error;
      this.g.style.display = 'none';
      this.g.style.display = 'block';
    } );
	}
}
