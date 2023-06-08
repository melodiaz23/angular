import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', //with [] is an attribute
  // selector: '.app-servers', // select like a class
  template: `<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {}
