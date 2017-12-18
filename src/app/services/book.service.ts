import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Book } from '../book';

@Injectable()
export class BookService {
  // public static base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';

  constructor(private _http: Http) {}

  getBooks(): Promise<Book[]> {
    console.log('books from server');
    return this._http.get('/api/books')
      .map(data => data.json())
        .toPromise();
  }

  getBook(id: string): Promise<Book> {
    console.log('getting by id', id);
    return this._http.get(`/api/books/${ id }`)
      .map(data => data.json())
      .toPromise();
  }

  createBook(book: Book): Promise<Book> {
    return this._http.post('/api/books', book)
      .map(data => data.json())
      .toPromise();
  }

  removeBook(id: string): Promise<Book> {
    return this._http.delete(`/api/books/${ id }`)
      .map(data => data.json())
      .toPromise();
  }

  updateBook(book: Book): Promise<Book> {
    return this._http.put(`/api/books/${ book._id }`, book)
      .map(data => data.json())
      .toPromise();
  }
}
