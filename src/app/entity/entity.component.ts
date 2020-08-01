import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {

  rowData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.rowData = this.http.get('./assets/data.json');
  }
  columnDefs = [
        {headerName: 'Program',field: 'program', sortable: true, filter: true, checkboxSelection: true },
        {headerName: 'Branch',field: 'branch', sortable: true, filter: true },
        {headerName: 'Specialisation',field: 'specialisation', sortable: true, filter: true},
        {headerName: 'Semester',field: 'semester', sortable: true, filter: true },
        {headerName: 'Course',field: 'course', sortable: true, filter: true}
    ];

    

}
