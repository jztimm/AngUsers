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
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onAddUser(form: NgForm) {
    const id = Math.round(Math.random() * 100); // Just generating a random ID for now
    const name = form.value.name;
    const email = form.value.email;
    const newUser = new User(id, name, email);
    this.userService.addUser(newUser);
    form.resetForm();
  }
}
