import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersServiceService } from '../../services/users-service.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: any;

  constructor(
    public usersService: UsersServiceService,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.usersService.getAllUsers().subscribe(
      response => { this.users = response; },
      error => console.log(error));
  }

}
