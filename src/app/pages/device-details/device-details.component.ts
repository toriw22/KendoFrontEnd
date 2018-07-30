import { Component, OnInit} from '@angular/core';
import { DevicesService } from '../../devices.service';
import { Device } from '../../device';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {
devices: Device[];
  
  constructor() { }
  // private devicesService: DevicesService
 
  ngOnInit() {
    // this.getDevices();
  }
   
  // getDevices(): void {
  //   this.devicesService.getDevices()
  //   .subscribe(devices => this.devices = devices);
  // }
  

}


