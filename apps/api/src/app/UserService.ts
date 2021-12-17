import { injectable } from 'tsyringe';
import UserRepository from './UserRepository';

@injectable()
export default class UserService {
  UserRepository: UserRepository;

  constructor(UserRepository: UserRepository) {
    this.UserRepository = UserRepository;
  }

  getUsers() {
    return this.UserRepository.getUsers();
  }
}
