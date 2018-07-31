import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DevicesService } from '../../devices.service';
import { Device } from '../../device';

import { State } from '@progress/kendo-data-query';

import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent implements OnInit {
  
  devices: Device[];
  
  constructor(private devicesService: DevicesService) { }
 
  ngOnInit() {
    this.getDevices();
    console.log(Device);
    console.log(this.devices);
  }
   
  getDevices(): void {
    this.devicesService.getDevices()
    .subscribe(devices => this.devices = devices);
  }
  
  
  

  
}
