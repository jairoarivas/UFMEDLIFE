import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {EggsService} from '../eggs.service';

@Component({
  selector: 'create',
  templateUrl: 'app/eggs/create/create.template.html',
  styleUrls: ['app/app.styles.css']
})
export class CreateComponent {
	egg: any = {};
	errorMessage: string;

  g: HTMLElement;
  s:HTMLElement;

	constructor(private _router:Router,
				private _eggsService: EggsService) {}

  ngOnInit(){
    this.g = document.getElementById('errorMessage') as HTMLElement;
    this.g.style.display = 'none';
    this.s = document.getElementById('successMessage') as HTMLElement;
    this.s.style.display = 'none';
  }

	create() {
    this.egg.eggName = this.egg.eggName.replace(/\s+/g, '');
		this._eggsService.create(this.egg).subscribe(createdEgg => {
      this.s.style.display = 'none';
      this.s.style.display = 'block';
      setTimeout(() => {
          this._router.navigate(['/eggs']);
      }, 1500);
    },
		error => {
      this.errorMessage = error;
      this.g.style.display = 'none';
      this.g.style.display = 'block';
    });
	}
}
