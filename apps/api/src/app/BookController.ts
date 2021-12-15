import { Router } from 'express';
import { controller, httpGet } from '@mildjs/router';
import BookService from './BookService';

@controller('books')
export default class BookController {

  constructor(private bookService: BookService) { }

  @httpGet()
  public async getBooks(req: any, res: any, next: any) {
      const data = this.bookService.getBooks();
      res.status(200).json( data );
  }

  // routes() {
  //   return Router().get('/', (_req, res) => res.send(this.getBooksRoute()));
  // }
}
