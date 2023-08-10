import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { ClasesComponent } from './components/clases/clases.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';

import { AuthComponent } from './modules/auth/auth.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { authGuard } from './modules/auth/auth.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
  children: [
    { path:  'alumnos', component: AlumnosComponent},
    { path:  'clases', component: ClasesComponent},
    { path:  'cursos', component: CursosComponent}
    ]},
    { path: 'auth',canActivate:[authGuard], component: AuthComponent,
  children: [
    { path:  'login', component: FormularioComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
