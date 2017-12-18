import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {

  registrationErrors: string[] = [];

  user: User = new User();

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(user: User) {

    console.log('registering', user);
    this.auth.register(user)
      .then(() => this.router.navigate(['books']))
      .catch(response => this.handleErrors(response.json()))
  }

  private handleErrors(errors: string[] | Error) {
    this.registrationErrors = Array.isArray(errors) ? errors : [errors.message];
  }
}
