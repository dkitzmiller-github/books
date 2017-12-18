import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { TitleizePipe } from '../titleize.pipe';
import { BookService } from '../services/book.service';
// import { BOOKS } from '../data/books.data';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [TitleizePipe]
})

export class BookListComponent implements OnInit {

  books: Array<Book> = [];
  selectedBook: Book;
  filter: Book = new Book();

  constructor(private titleize: TitleizePipe, private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks()
      .then(books => {
        this.books = books;
      })
      .then(() => this.titleCaseAuthors())
      .catch(console.log);
  }

  titleCaseAuthors(): void {
    this.books.forEach(book => {
      book.author.name = this.titleize.transform(book.author.name);
    });
  }

  bookListener(book: Book): void {
    console.log('INSIDE BOOK LISTENER', book);
    this.books.push(book);
  }

   onSelect(book: Book) {
    console.log('Selection made.', book);
    this.selectedBook = book === this.selectedBook ? null : book;
  }

  removeBook(book: Book) {
      if (book === this.selectedBook) {
        this.onSelect(book);
      }
      // this.books.splice(this.books.indexOf(book), 1);

      this.bookService.removeBook(book._id)
        .then(() => this.books.splice(this.books.indexOf(book)))
        .catch(console.log);

  }

  onTdClick(event: Event) {
    event.stopPropagation();
    console.log('TD CLICK');
  }

  updateSelectedBook(book: Book) {
    console.log('updating book in list component', book);

    this.books.splice(this.books.indexOf(this.selectedBook), 1, book);
  }

}


