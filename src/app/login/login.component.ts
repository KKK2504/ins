import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();
  @Output() login = new EventEmitter<User>();

  constructor() { }

  login() {
    this.login.emit(this.user);
  }
}
