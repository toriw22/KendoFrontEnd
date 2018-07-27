import { Component, OnInit } from '@angular/core';
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
    console.log(Device);
    console.log(this.devices);
  }
   
  getDevices(): void {
    this.devicesService.getDevices()
        .subscribe(devices => this.devices = devices);
  }

  public gridData: any[] = this.devices;

  
}
