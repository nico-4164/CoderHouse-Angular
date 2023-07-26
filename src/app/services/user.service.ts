import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'James Bond', email: 'james@gmail.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@gmail.com' },
    { id: 3, name: 'Tio Bob', email: 'bob@gmail.com' },
    { id: 4, name: 'Alice Wonderlands',email: 'alice@gmail.com',},
    { id: 5, name: 'Michael Jackson',email: 'michael@gmail.com',}
  ];

  getUsersWithPromise(): Promise<User[]> {
    // simulo una solicitud HTTP con un retardo de 1 segundo utilizando una promesa
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.users);
      }, 3000);
    });
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }
}
