import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EggsService } from '../eggs.service';


@Component({
  selector: 'edit',
  templateUrl: 'app/eggs/edit/edit.template.html',
  styleUrls: ['app/app.styles.css']
})
export class EditComponent {
	egg: any = {};
	errorMessage: string;
	paramsObserver: any;
  g: HTMLElement;
  s:HTMLElement;

	constructor(private _router:Router,
				private _route: ActivatedRoute,
				private _eggsService: EggsService) {}

	ngOnInit() {
    this.g = document.getElementById('errorMessage') as HTMLElement;
    this.g.style.display = 'none';
    this.s = document.getElementById('successMessage') as HTMLElement;
    this.s.style.display = 'none';
		this.paramsObserver = this._route.params.subscribe(params => {
			let eggId = params['eggId'];

			this._eggsService.read(eggId).subscribe(egg => {
																this.egg = egg;
													 		},
															error => this._router.navigate(['/eggs']));
		});
	}

	ngOnDestroy() {
		this.paramsObserver.unsubscribe();
	}

	update() {
		this._eggsService.update(this.egg).subscribe(savedEgg =>{
      this.s.style.display = 'none';
      this.s.style.display = 'block';
      setTimeout(() => {
        this._router.navigate(['/eggs']);
      }, 1500);
    } ,
		error => {
      this.errorMessage = error;
      this.g.style.display = 'none';
      this.g.style.display = 'block';
    } );
	}
}
