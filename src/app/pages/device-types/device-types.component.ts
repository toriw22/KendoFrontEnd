import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-types',
  templateUrl: './device-types.component.html',
  styleUrls: ['./device-types.component.scss']
})
export class DeviceTypesComponent implements OnInit {

  public selected: number = 1;
  public items: any = [{
        disabled: false,
        type: "A",
        averageReading: 29,
        measures: "Temperature"
  }, {
        disabled: false,
        type: "B",
        averageReading: 24,
        measures: "Humidity"
  }, {
        disabled: false,
        type: "C",
        averageReading: 124132,
        measures: "Location"
  }]
  
  constructor() { }

  ngOnInit() {
  }

}
