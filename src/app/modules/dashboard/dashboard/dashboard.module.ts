import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

//componentes
import { AlumnosComponent } from 'src/app/components/alumnos/alumnos.component';
import { UserListComponent } from 'src/app/components/user-list/user-list.component';

//servicios
import { UserService } from 'src/app/services/user.service';

@NgModule({
  declarations: [
    DashboardComponent,
    AlumnosComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
