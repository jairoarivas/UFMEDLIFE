import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MembersService } from '../members.service';
import { EventsService } from '../../events/events.service';
import { AuthenticationService} from '../authentication.service';

@Component({
  selector: 'addPoint',
  templateUrl: 'app/authentication/addPoint/addPoint.template.html',
  styleUrls: ['app/app.styles.css']
})
export class AddPointComponent {
  member: any = {};
  errorMessage: string;
  paramsObserver: any;
  events: any;
  event: any;
  user: any;
  allowEdit: boolean = false;
  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _membersService: MembersService,
    private _eventsService: EventsService, private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.user = this._authenticationService.user;

    this.paramsObserver = this._route.params.subscribe(params => {
      let userId = params['userId'];

      this._membersService.read(userId).subscribe(member => {
        this.allowEdit = (this.user && (this.user.role === 'Admin' || this.user.role === 'Officer') );
        this.member = member;
      },
        error => this._router.navigate(['/authentication/addPoint']));


      this._eventsService.list().subscribe(events => this.events = events);

    });
  }

  ngOnDestroy() {
    this.paramsObserver.unsubscribe();
  }

  selected = function(event) {
    return (this.member.tempEvent === event);
  }

  temp(event){
    this.member.tempEvent = event;
  }

  addPoint() {
    this._membersService.addPoint(this.member).subscribe(savedUser => this._router.navigate(['/authentication/addPoint']),
      error => this.errorMessage = error);
  }
  removePoint() {
		this._membersService.removePoint(this.member).subscribe(savedUser => this._router.navigate(['/authentication/addPoint']),
																 error => this.errorMessage = error);
	}
}
