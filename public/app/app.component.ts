import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ufmedlife',
  template: `
  <router-outlet name = "header" ></router-outlet>
  <router-outlet></router-outlet>
`
})
export class AppComponent {

}
