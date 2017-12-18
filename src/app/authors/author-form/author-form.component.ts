import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Author } from '../../author';

import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html'
})
export class AuthorFormComponent {
    author: Author = new Author();
    errorMessages: string[] = [];


    constructor(private authorService: AuthorService, private router: Router) {}

    onSubmit(author: Author): void {
      console.log('submitting author', author);

      this.authorService.createAuthor(author)
        .then(() => this.router.navigate(['authors']))
        .catch(error => {
          console.log('catching errors', error);
          this.handleErrors(error.json())
        });
    }

    private handleErrors(error: string[] | Error): void {
      this.errorMessages = Array.isArray(error) ? error : [error.message];
    }

}
