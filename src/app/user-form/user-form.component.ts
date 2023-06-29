import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  user: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onAddUser(form: NgForm) {
    const id = Math.round(Math.random() * 100);
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const email = form.value.email;
    const newUser = new User(id, firstName, lastName, email);
    this.userService.addUser(newUser);
    form.resetForm();
  }
}
