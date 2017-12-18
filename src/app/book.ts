import { Author } from './author';

export class Book {
  _id: string;
  title: string;
  year: number;
  pages: number;
  author: Author;
  publisher: string;
}

