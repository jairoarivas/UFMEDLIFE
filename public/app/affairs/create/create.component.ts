import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import {AffairsService} from '../affairs.service';

@Component({
  selector: 'create',
  templateUrl: 'app/affairs/create/create.template.html',
  styleUrls: ['app/app.styles.css']
})
export class CreateComponent {
	affair: any = {};
	errorMessage: string;

  g: HTMLElement;
  s:HTMLElement;

	constructor(private _router:Router,
				private _affairsService: AffairsService, private _authenticationService: AuthenticationService) {}

  isAuthorized(){
		if(this._authenticationService.user.role === 'Admin'){
			return true;
		}
		else {
			return false;
		}
	}

  ngOnInit(){
    this.g = document.getElementById('errorMessage') as HTMLElement;
    this.g.style.display = 'none';
    this.s = document.getElementById('successMessage') as HTMLElement;
    this.s.style.display = 'none';
  }

	create() {
    this.affair.affairName = this.affair.affairName.replace(/\s+/g, '');
		this._affairsService.create(this.affair).subscribe(createdAffair => {
      this.s.style.display = 'none';
      this.s.style.display = 'block';
      setTimeout(() => {
          this._router.navigate(['/affairs']);
      }, 1500);
    },
		error => {
      this.errorMessage = error;
      this.g.style.display = 'none';
      this.g.style.display = 'block';
    });
	}
}
