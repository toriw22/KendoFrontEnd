import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DevicesService } from '../../devices.service';

import { State } from '@progress/kendo-data-query';

import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent implements OnInit {

  public view: Observable<GridDataResult>;
    public state: State = {
      skip: 0,
      take: 5
    };

    constructor(private service: DevicesService) {
        this.view = service;
        this.service.query(this.state);
    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.service.query(state);
    }
  
  // devices: Device[];
  
  // constructor(private devicesService: DevicesService) { }
 
  ngOnInit() {
    
  }
   
  // getDevices(): void {
  //   this.devicesService.getDevices()
  //   .subscribe(devices => this.devices = devices);
  // }
  
  
  // public gridData: any[] = this.devices;

  
}
