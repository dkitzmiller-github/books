import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/switchMap';

import { BookService } from '../services/book.service';
import { Book } from '../book';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
})

export class BookDetailsComponent implements OnInit, OnDestroy {
  // @Input()
  book: Book;
  subscription: Subscription;

  @Output() updatedBook = new EventEmitter<Book>();

  constructor(private bookService: BookService, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('on init')
    this.subscription = this.route.paramMap
      .switchMap(param =>
        this.bookService.getBook(param.get('_id'))
      )
      .subscribe(book => this.book = book);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onUpdate(book: Book, event: Event) {
    event.preventDefault();
    console.log('updating book', book);

    // this.updatedBook.emit(book);

    this.bookService.updateBook(book)

      .then(updatedBook => this.updatedBook.emit(updatedBook))
      .catch(console.log);
  }

}
