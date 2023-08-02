import { Injectable } from '@angular/core';
import { Curso } from './cursos.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: Curso[] = [
    {
      title: 'Curso de Angular',
      subtitle: 'Avanzado',
      imageUrl: 'https://imgur.com/puP2Vkn.png',
      description: 'Este curso te enseñará a desarrollar aplicaciones web con Angular.',
    },
    {
      title: 'Curso de React',
      subtitle: 'Intermedio',
      imageUrl: 'https://imgur.com/mvF1jnB.png',
      description: 'Aprende a construir interfaces de usuario interactivas con React.',
    },
    {
      title: 'Curso de Vue.js',
      subtitle: 'Básico',
      imageUrl: 'https://imgur.com/YDGXEJC.png',
      description: 'Introdúcete en el mundo de Vue.js y construye aplicaciones modernas.',
    },
    {
      title: 'Curso de JavaScript',
      subtitle: 'Fundamentos',
      imageUrl: 'https://imgur.com/y8vziSb.png',
      description: 'Aprende los fundamentos del lenguaje de programación JavaScript.',
    },
    {
      title: 'Curso de Python',
      subtitle: 'Avanzado',
      imageUrl: 'https://imgur.com/olbt6yV.png',
      description: 'Este curso te llevará al siguiente nivel en Python y su ecosistema.',
    },
  ];
  

  getCursos(){
    return this.cursos;
  }

  constructor() { }
}
