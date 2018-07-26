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

  ngOnInit() {
    console.log(DEVICES);
    console.log(DEVICES[1].id);
  }

  devices = DEVICES;
  selectedDevice: Device;

  onSelect(device: Device): void {
    this.selectedDevice = device;
    console.log(device);
}

}
