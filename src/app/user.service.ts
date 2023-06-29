import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    new User(1, 'John', 'Doe', 'john@example.com'),
    new User(2, 'Jane', 'Smith', 'jane@example.com'),
  ];

  getUsers(): User[] {
    return this.users.slice();
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
