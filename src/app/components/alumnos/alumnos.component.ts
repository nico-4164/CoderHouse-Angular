import { Component } from '@angular/core';

export interface AlumnoInfo {
  id: string;
  nombre: string;
  apellido:string;
  edad: number;
  promedioNotas: number;
}

const ALUMNO_DATA: AlumnoInfo[] = [
  { id: "01", nombre: 'Juan',apellido:'Sanchez', edad: 18, promedioNotas: 8.5 },
  { id: "02", nombre: 'María',apellido:'La del barrio', edad: 20, promedioNotas: 7.2 },
  { id: "03", nombre: 'Pedro',apellido:'Parker', edad: 19, promedioNotas: 6.8 },
  { id: "04", nombre: 'Ana',apellido:'May', edad: 21, promedioNotas: 9.0 },
  { id: "05", nombre: 'Luisa',apellido:'Lane', edad: 21, promedioNotas: 7.8 },
  { id: "06", nombre: 'Carlos',apellido:'Villagran', edad: 19, promedioNotas: 6.5 },
  { id: "07", nombre: 'Sofía',apellido:'Carrizo', edad: 18, promedioNotas: 8.9 },
  { id: "08", nombre: 'Andrés',apellido:'Escobar', edad: 20, promedioNotas: 9.2 },
  { id: "09", nombre: 'Laura',apellido:'Gimenez', edad: 22, promedioNotas: 7.1 },
  { id: "10", nombre: 'Diego',apellido:'Maradonna', edad: 17, promedioNotas: 6.3 }
];

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent {
  displayedColumns: string[] = ['id', 'nombre','apellido', 'edad', 'promedio'];
  dataSource = ALUMNO_DATA;
  fechaActual: Date = new Date();
}
