import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Author } from '../author';

@Injectable()
export class AuthorService {
  constructor(private http: Http) {}

  getAuthors(): Promise<Author[]> {
    return this.http.get('/api/author')
      .map(response => response.json())
      .toPromise();
  }

  createAuthor(author: Author): Promise<Author> {
    return this.http.post('/api/author', author)
      .map(data => data.json())
      .toPromise();
  }
}
