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
  
  selectedDevice: Device;



  constructor(private devicesService: DevicesService) { }
  
  getDevices(): void {
    this.devicesService.getDevices()
        .subscribe(devices => this.devices = devices);
  }

  ngOnInit() {
    this.getDevices();
    console.log(this.devices);
    
  }

  
  public gridData: any[] = this.devices;

  onSelect(device: Device): void {
    this.selectedDevice = device;
    console.log(device);
  }

  onClickTest() {
    console.log('click test worked!');
  }

  
}
