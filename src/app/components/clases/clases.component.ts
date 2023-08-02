import { Component } from '@angular/core';

import { ClasesService } from './clases.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss'],
})
export class ClasesComponent {

  constructor(private clases: ClasesService) { }

  displayedColumns: string[] = ['number', 'name', 'date', 'time'];
  dataSource = new MatTableDataSource(this.clases?.getClases());

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
