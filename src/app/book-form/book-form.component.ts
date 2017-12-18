import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { BookService } from '../services/book.service';
import { AuthorService } from '../services/author.service';
import { Book } from '../book';
import { Author } from '../author';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html'
})

export class BookFormComponent implements OnInit {
  @Output() bookEmitter = new EventEmitter<Book>();

  book: Book = new Book();
  authors: Array<Author> = [];

  constructor(private bookService: BookService, private authorService: AuthorService) {}

  ngOnInit() {
    this.authorService.getAuthors()
      .then(authors => { console.log(authors); this.authors = authors; })
      .catch(() => {});
  }

  onSubmit(form): void {
    // event.preventDefault();

    console.log(this.book);

    // this.books.push(this.book);
    // this.bookEmitter.emit(this.book);

    this.bookService.createBook(this.book)
      .then(book => this.bookEmitter.emit(book))
      .then(() => this.book = new Book())
      .then(() => form.reset())
      .catch(console.log);
  }
}
