import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { AlumnosComponent } from 'src/app/components/alumnos/alumnos/alumnos.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AlumnosComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
