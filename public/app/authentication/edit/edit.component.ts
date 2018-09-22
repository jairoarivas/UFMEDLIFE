import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'edit',
  templateUrl: 'app/authentication/edit/edit.template.html',
  styleUrls: ['app/app.styles.css']
})
export class EditComponent {
	member: any = {};
	errorMessage: string;
	paramsObserver: any;
  roles = ['Admin','Member'];
  g: HTMLElement;
  s:HTMLElement;
	constructor(private _router:Router,
				private _route: ActivatedRoute,
				private _authenticationService: AuthenticationService) {}

	ngOnInit() {
    this.g = document.getElementById('errorMessage') as HTMLElement;
    this.g.style.display = 'none';
    this.s = document.getElementById('successMessage') as HTMLElement;
    this.s.style.display = 'none';
		this.paramsObserver = this._route.params.subscribe(params => {
			let userId = params['userId'];

			this._authenticationService.read(userId).subscribe(member => {
																this.member = member;
													 		},
															error => this._router.navigate(['/authentication/members']));
		});
	}

	ngOnDestroy() {
		this.paramsObserver.unsubscribe();
	}

	update() {
		this._authenticationService.update(this.member).subscribe(savedUser => {
      this.s.style.display = 'none';
      this.s.style.display = 'block';
      setTimeout(() => {
        this._router.navigate(['authentication/members'])
      }, 1500);
      } ,
			error => {
        this.errorMessage = error;
        this.g.style.display = 'none';
        this.g.style.display = 'block';
      } );
	}
}
