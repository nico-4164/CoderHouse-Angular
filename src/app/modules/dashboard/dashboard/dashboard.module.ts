import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

//componentes
import { AlumnosComponent } from 'src/app/components/alumnos/alumnos.component';
import { UserListComponent } from 'src/app/components/user-list/user-list.component';
import { ClasesComponent } from 'src/app/components/clases/clases.component';

//servicios
import { UserService } from 'src/app/services/user.service';

@NgModule({
  declarations: [
    DashboardComponent,
    AlumnosComponent,
    UserListComponent,
    ClasesComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    UserService
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
