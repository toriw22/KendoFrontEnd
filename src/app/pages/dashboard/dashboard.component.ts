import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../../devices.service';
import { Device } from '../../device';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  
  devices: Device[];
  alerts: number = 0;
  
  constructor(private devicesService: DevicesService) { }
 
  ngOnInit() {
    this.getDevices();
  }
   
  getDevices(): void {
    this.devicesService.getDevices()
    .subscribe(devices => {
      this.devices = devices;
      console.log(devices.length);
      for (var i = 0; i < devices.length; i++ ) {
        if (this.devices[i].pump_status.warnings != "0000000000000000000000000" ) {
          this.alerts +=1;
          return this.alerts;
        }
      }
    });
  }

  
}
