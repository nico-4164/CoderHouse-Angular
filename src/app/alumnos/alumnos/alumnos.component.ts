import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})

export class AlumnosComponent {
  alumnos: any[] = [
    { nombre: 'Juan', edad: 18, promedioNotas: 8.5 },
    { nombre: 'María', edad: 20, promedioNotas: 7.2 },
    { nombre: 'Pedro', edad: 19, promedioNotas: 6.8 },
    { nombre: 'Ana', edad: 21, promedioNotas: 9.0 },
    { nombre: 'Luisa', edad: 21, promedioNotas: 7.8 },
    { nombre: 'Carlos', edad: 19, promedioNotas: 6.5 },
    { nombre: 'Sofía', edad: 18, promedioNotas: 8.9 },
    { nombre: 'Andrés', edad: 20, promedioNotas: 9.2 },
    { nombre: 'Laura', edad: 22, promedioNotas: 7.1 },
    { nombre: 'Diego', edad: 17, promedioNotas: 6.3 }
  ];
  fechaActual: Date = new Date();
}
