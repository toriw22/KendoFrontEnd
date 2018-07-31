import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DevicesService } from '../../devices.service';
import { Device } from '../../device';

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
  }
   
  getDevices(): void {
    this.devicesService.getDevices()
    .subscribe(devices => {
      this.devices = devices;
      console.log(devices.length);
    });
  }

  // warning: number = device.pump_status.warnings;

  // if (warning !=== 0000000000000000000000000) {

  
  
}
