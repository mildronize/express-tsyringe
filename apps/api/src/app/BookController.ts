import { Request, Response, NextFunction } from 'express';
import { controller, httpGet } from '@mildjs/router';
import BookService from './BookService';

@controller('books')
export default class BookController {

  constructor(private bookService: BookService) { }

  @httpGet()
  public async getBooks(req: Request, res: Response, next: NextFunction) {
      const data = this.bookService.getBooks();
      res.status(200).json( data );
  }

}
