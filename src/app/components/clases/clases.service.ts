import { Injectable } from '@angular/core';
import { clases } from './clases.model'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  private clases : clases[] = []

  getClases(){
    this.loadClases();
    return this.clases;
  }

  loadClases(){
    this.httpClient.get<clases[]>("http://localhost:3000/clases").subscribe({
      next: (respopnse) =>{
        this.clases=respopnse;
      }
    })
  }

  constructor(private httpClient:HttpClient) { }
}
