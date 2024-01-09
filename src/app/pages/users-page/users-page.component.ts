import { Component, OnInit } from '@angular/core';
import {UserComponent} from "../components/user/user.component";
import { User } from '../../core/models/users';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: value => this.users = value,
      error: err => alert('une erreur est survenue!')
    })
  }
}