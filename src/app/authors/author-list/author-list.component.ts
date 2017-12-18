import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../../services/author.service';

import { Author } from '../../author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html'
})
export class AuthorListComponent implements OnInit {

  authors: Author[] = [];

  constructor(private authorService: AuthorService) {}

  getAuthors(): void {
    this.authorService.getAuthors()
      .then(authors => this.authors = authors)
      .catch(() => {});
  }

  ngOnInit() {
    this.getAuthors();
  }
}
