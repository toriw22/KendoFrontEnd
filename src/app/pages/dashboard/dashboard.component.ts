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

  constructor() { }
  private devicesService: DevicesService

  getDevices(): void {
    this.devicesService.getDevices()
      .subscribe(devices => this.devices = devices);
  }

  ngOnInit() {
    this.getDevices();
  }
}
