import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;

  constructor(service: UserService) {
    this.users = service.getUsers();
   }

  ngOnInit() {
  }

}
