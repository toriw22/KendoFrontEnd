import { Component, OnInit } from '@angular/core';
import { devices } from './devices';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public gridData: any[] = devices;
  
  constructor() { }

  ngOnInit() {
    
  }

}
