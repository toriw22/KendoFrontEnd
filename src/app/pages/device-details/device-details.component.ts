import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../../device';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

  public title: string = 'Device A';

  constructor() { }

  ngOnInit() {
  }

}

@Input() device: Device;
