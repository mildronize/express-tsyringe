export default class UserRepository {
  Users = [
    { id: 1, name: 'Thada' },
    { id: 2, name: 'Mild' },
    // { id: 3, name: 'Poems that Solve Puzzles' }
  ];

  getUsers() {
    return this.Users;
  }
}
