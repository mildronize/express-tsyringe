/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import 'reflect-metadata';
import * as express from 'express';
import { router } from '@mildjs/router';
import { container } from 'tsyringe';

import BookController from './app/BookController';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api! efef ' + router() });
});
app.use('/books', container.resolve(BookController).routes());

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
