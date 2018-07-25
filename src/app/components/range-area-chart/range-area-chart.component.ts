import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-area-chart',
  templateUrl: './range-area-chart.component.html',
  styleUrls: ['./range-area-chart.component.scss']
})
export class RangeAreaChartComponent implements OnInit {

  public weatherData = [
    { month: "January", min: 5, max: 11 },
    { month: "February", min: 5, max: 13 },
    { month: "March", min: 7, max: 15 },
    { month: "April", min: 10, max: 19 },
    { month: "May", min: 13, max: 23 },
    { month: "June", min: 17, max: 28 },
    { month: "July", min: 20, max: 30 },
    { month: "August", min: 20, max: 30 },
    { month: "September", min: 17, max: 26 },
    { month: "October", min: 13, max: 22 },
    { month: "November", min: 9, max: 16 },
    { month: "December", min: 6, max: 13 }
  ];

  public labelContentFrom(e: any): string {
      return `${ e.value.from } °C`;
  }

  public labelContentTo(e: any): string {
      return `${ e.value.to } °C`;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
