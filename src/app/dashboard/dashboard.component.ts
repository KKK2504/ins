import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  loggedInUser: User | undefined;

  constructor() { }

  onLogin(user: User) {
    this.loggedInUser = user;
  }
}
