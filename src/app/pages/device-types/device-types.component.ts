import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-types',
  templateUrl: './device-types.component.html',
  styleUrls: ['./device-types.component.scss']
})
export class DeviceTypesComponent implements OnInit {

  public title: string = 'Device Types';
  
  constructor() { }

  ngOnInit() {
  }

}
