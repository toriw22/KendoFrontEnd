import { Component, OnInit } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public gridData: any[] = products;
  
  constructor() { }

  ngOnInit() {
    
  }

}
