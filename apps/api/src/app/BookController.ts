import { Router } from 'express';
import { controller } from '@mildjs/router';
import BookService from './BookService';

@controller()
export default class BookController {

  constructor(private bookService: BookService) { }

  getBooksRoute() {
    return this.bookService.getBooks();
  }

  routes() {
    return Router().get('/', (_req, res) => res.send(this.getBooksRoute()));
  }
}
