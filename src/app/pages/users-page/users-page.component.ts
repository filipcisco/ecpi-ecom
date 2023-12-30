import { Component } from '@angular/core';
import {UserComponent} from "../components/user/user.component";

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent {
  users: { id: number, nom: string, prenom: string }[] = [
    { id: 1, nom: 'Doe', prenom: 'John' },
    { id: 2, nom: 'Smith', prenom: 'Jane' },
    { id: 3, nom: 'Johnson', prenom: 'Bob' },
    { id: 4, nom: 'Williams', prenom: 'Alice' },
    { id: 5, nom: 'Brown', prenom: 'Charlie' },
    { id: 6, nom: 'Miller', prenom: 'Eva' },
    { id: 7, nom: 'Davis', prenom: 'Frank' },
    { id: 8, nom: 'Garcia', prenom: 'Grace' },
    { id: 9, nom: 'Rodriguez', prenom: 'Henry' },
    { id: 10, nom: 'Martinez', prenom: 'Ivy' },
    { id: 11, nom: 'Jackson', prenom: 'Jack' },
    { id: 12, nom: 'White', prenom: 'Wendy' },
    { id: 13, nom: 'Harris', prenom: 'Harry' },
    { id: 14, nom: 'Clark', prenom: 'Claire' },
    { id: 15, nom: 'Lewis', prenom: 'Louis' },
    { id: 16, nom: 'Lee', prenom: 'Lily' },
    { id: 17, nom: 'Walker', prenom: 'Walter' },
    { id: 18, nom: 'Wright', prenom: 'Winnie' },
    { id: 19, nom: 'Young', prenom: 'Yasmine' },
    { id: 20, nom: 'Cooper', prenom: 'Colin' },
  ];
}
