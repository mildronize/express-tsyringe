import { Router } from 'express';
import { autoInjectable, injectable } from 'tsyringe';
import { controller } from './decorators';
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