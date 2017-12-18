import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})

export class NavComponent {
  constructor(private auth: AuthService, private router: Router) {}

  isAuthed(): boolean {
    return this.auth.isAuthed();
  }

  logout() {
    this.auth.logout()
      .then(() => this.router.navigate(['home']))
      .catch(() => {});
  }
}
