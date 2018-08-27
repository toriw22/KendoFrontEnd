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
  
      for (var i = 0; i < devices.length; i++ ) {
        var d = new Date(0); 
        if (this.devices[i].pump_status.warnings != "0000000000000000000000000" ) {
          alert("Warning at " + new Date(devices[i].epochtime * 1000));
        }
      }
    });
  }
  
  
}
