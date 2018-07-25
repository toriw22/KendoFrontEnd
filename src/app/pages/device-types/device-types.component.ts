import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-types',
  templateUrl: './device-types.component.html',
  styleUrls: ['./device-types.component.scss']
})
export class DeviceTypesComponent implements OnInit {

  public selected: number = 1;
  public items: any = [{
        disabled: true,
        city: "Paris",
        temp: 17,
        weather: "rainy"
  }, {
        disabled: false,
        city: "New York",
        temp: 29,
        weather: "sunny"
  }, {
        disabled: false,
        city: "Sofia",
        temp: 23,
        weather: "cloudy"
  }, {
        disabled: false,
        city: "London",
        temp: 19,
        weather: "cloudy"
  }]
  
  constructor() { }

  ngOnInit() {
  }

}
