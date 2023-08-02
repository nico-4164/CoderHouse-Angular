import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { Curso } from './cursos.model';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  constructor(private cursos : CursosService){}

  cursosList = this.cursos.getCursos();
  

}
