import { Component, OnInit } from '@angular/core';
import { Device } from '../../device';
import { DEVICES } from '../../devices';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  public gridData: any[] = DEVICES;

  devices = DEVICES;

  selectedDevice: Device;

  constructor() { }
  
  ngOnInit() {
    console.log(DEVICES);
  }

  onSelect(device: Device): void {
    this.selectedDevice = device;
    console.log(device);
  }

  onClickTest() {
    console.log('click test worked!');
  }

  
}
