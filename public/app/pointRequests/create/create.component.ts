import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {PointRequestsService} from '../pointRequests.service';

@Component({
  selector: 'create',
  templateUrl: 'app/pointRequests/create/create.template.html',
  styleUrls: ['app/app.styles.css']
})
export class CreateComponent {
	pointRequest: any = {};
	errorMessage: string;

  g: HTMLElement;
  s:HTMLElement;

	constructor(private _router:Router,
				private _pointRequestsService: PointRequestsService) {}

  ngOnInit(){
    this.g = document.getElementById('errorMessage') as HTMLElement;
    this.g.style.display = 'none';
    this.s = document.getElementById('successMessage') as HTMLElement;
    this.s.style.display = 'none';
  }

	create() {
    this.pointRequest.pointRequestName = this.pointRequest.pointRequestName.replace(/\s+/g, '');
		this._pointRequestsService.create(this.pointRequest).subscribe(createdPointRequest => {
      this.s.style.display = 'none';
      this.s.style.display = 'block';
      setTimeout(() => {
          this._router.navigate(['/pointRequests']);
      }, 1500);
    },
		error => {
      this.errorMessage = error;
      this.g.style.display = 'none';
      this.g.style.display = 'block';
    });
	}
}
