import { Injectable } from '@angular/core';
import { clases } from './clases.model'

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  private clases : clases[] = [
    {
      "number": 1,
      "name": "introduccion a la programacion",
      "date": "2023-07-28",
      "time": "18:00 PM"
    },{
      "number": 2,
      "name": "variables y metodos",
      "date": "2023-08-04",
      "time": "18:00 PM"
    },{
      "number": 3,
      "name": "creacion de clases",
      "date": "2023-08-11",
      "time": "18:00 PM"
    },{
      "number": 4,
      "name": "Herencia en objetos",
      "date": "2023-08-18",
      "time": "18:00 PM"
    },{
      "number": 5,
      "name": "Base de datos",
      "date": "2023-08-25",
      "time": "18:00 PM"
    }              
  ]

  getClases(){
    return this.clases;
  }

  constructor() { }
}
