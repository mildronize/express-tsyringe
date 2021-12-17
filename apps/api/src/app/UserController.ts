import { Request, Response, NextFunction } from 'express';
import { controller, ControllerBase, httpGet } from '@mildjs/router';
import UserService from './UserService';

@controller('Users')
export default class UserController {

  constructor(private UserService: UserService) { }

  @httpGet()
  public async getUsers(req: Request) {
      // const data = this.UserService.getUsers();
      // res.json(data);
      return this.UserService.getUsers();
  }

  @httpGet('error')
  public async getError(req: Request) {
      // return this.UserService.getUsers();
      throw Error('Errr จ้าาาา')
      //
  }


}
