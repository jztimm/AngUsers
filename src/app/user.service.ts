import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    new User(1, 'John', 'john@example.com'),
    new User(2, 'Doe', 'doe@example.com'),
  ];

  constructor() {}

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
