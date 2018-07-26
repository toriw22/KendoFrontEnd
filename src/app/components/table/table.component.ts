import { Component, OnInit } from '@angular/core';
import { DEVICES } from '../../devices';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public gridData: any[] = DEVICES;
  
  constructor() { }

  ngOnInit() {
    
  }

}
