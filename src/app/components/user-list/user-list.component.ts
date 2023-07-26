import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription, from, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  users$: Observable<User[]> | null = null;
  filterControl = new FormControl('');

  private usersSubscription: Subscription | undefined;

  constructor(private userService: UserService) { }
  

  ngOnInit(): void {
    this.loadUsers();
    console.log("muestro los users");
    console.log(this.users$);
  }

  ngOnDestroy(): void {
    if (this.usersSubscription) {
      this.usersSubscription.unsubscribe();
    }
  }

  private loadUsers(): void {
    console.log("entro en load users");

    // uso una promesa para cargar los usuarios
    const usersPromise: Promise<User[]> = this.userService.getUsersWithPromise();
    
    // convierto la promesa en un observable
    const usersObservable: Observable<User[]> = from(usersPromise);

    // uso el operador map para transformar el resultado del observable
    this.users$ = usersObservable.pipe(
      map(users => {
        const filterValue = this.filterControl.value?.toLowerCase() || '';
        return users.filter(user => user.name.toLowerCase().includes(filterValue));
      })
    );

    // me suscribo a los cambios del observable
    this.usersSubscription = this.users$.subscribe();
  }

  filterUsers(): Observable<User[]> {    
    const filterValue = this.filterControl.value?.toLowerCase() || '';
    return this.users$?.pipe(
      map(users => users.filter(user => user.name.toLowerCase().includes(filterValue)))
    ) || of([]); 
  }

  applyFilter(): void {
    const filterValue = this.filterControl.value?.toLowerCase() || '';
    this.users$ = this.userService.getUsers().pipe(
      map(users => users.filter(user => user.name.toLowerCase().includes(filterValue) || user.email.toLowerCase().includes(filterValue)))
    );
  }
}
