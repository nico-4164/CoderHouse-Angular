import { Injectable } from '@angular/core';
import { Curso } from './cursos.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: Curso[] = [];
  

  getCursos(){
    this.loadCursos()
    return this.cursos;
  }

  loadCursos(){
    this.httpClient.get<Curso[]>("http://localhost:3000/cursos").subscribe({
      next: (respopnse) =>{
        this.cursos=respopnse;
      }
    })
  }

  constructor(private httpClient:HttpClient) { }
}
