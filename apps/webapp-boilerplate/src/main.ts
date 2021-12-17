/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import 'reflect-metadata';
import * as express from 'express';
import { router, useExpressServer } from '@mildjs/router';
import { container } from 'tsyringe';

import BookController from './app/BookController';
import UserController from './app/UserController';

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to api! efef ' + router() });
});

useExpressServer(app, {
  controllers: [BookController, UserController]
})

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);
