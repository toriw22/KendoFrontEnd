import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../../devices.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  


  constructor(private devicesService: DevicesService) { }
  
  getDevices(): void {
    this.devicesService.getDevices()
        .subscribe(devices => this.devices = devices);
  }

  ngOnInit() {
    this.getDevices();
    console.log(DEVICES);
  }

  public gridData: any[] = devices;

  devices: Device[];

  selectedDevice: Device;

  onSelect(device: Device): void {
    this.selectedDevice = device;
    console.log(device);
  }

  onClickTest() {
    console.log('click test worked!');
  }

  
}
