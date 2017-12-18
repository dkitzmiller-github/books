import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  template: `
    <h2>{{ location.path() }} does not exist on this server</h2>
  `
})
export class NotFoundComponent {
  constructor(public location: Location) {}

}
