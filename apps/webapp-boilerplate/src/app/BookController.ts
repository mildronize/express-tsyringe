import { Request, Response, NextFunction } from 'express';
import { controller, ControllerBase, httpGet } from '@mildjs/router';
import BookService from './BookService';

@controller('books')
export default class BookController {

  constructor(private bookService: BookService) { }

  @httpGet()
  public async getBooks(req: Request) {
      // const data = this.bookService.getBooks();
      // res.json(data);
      return this.bookService.getBooks();
  }

  @httpGet('error')
  public async getError(req: Request) {
      // return this.bookService.getBooks();
      throw Error('Errr จ้าาาา')
      //
  }


}
