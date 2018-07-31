import { Component, OnInit } from '@angular/core';

import { DevicesService } from '../../devices.service';
import { Device } from '../../device';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent implements OnInit {

  devices: Device[];
  
  constructor(
    private devicesService: DevicesService
  ) { }
 
  ngOnInit() {
    this.getDevices();
  }
   
  getDevices(): void {
    this.devicesService.getDevices()
    .subscribe(devices => this.devices = devices);
  }

}
