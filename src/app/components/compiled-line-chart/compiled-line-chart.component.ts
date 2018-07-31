import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../../devices.service';
import { Device } from '../../device';

@Component({
  selector: 'app-compiled-line-chart',
  templateUrl: './compiled-line-chart.component.html',
  styleUrls: ['./compiled-line-chart.component.scss']
})
export class CompiledLineChartComponent implements OnInit {

  public series: any[] = [{
    name: "India",
    data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
  }, {
    name: "Russian Federation",
    data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
  }, {
    name: "Germany",
    data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995]
  },{
    name: "World",
    data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
  }];
  public reading: number[] = [0, 50, 100, 150, 200, 250, 300];
  

  devices: Device[];
  
  constructor(private devicesService: DevicesService) { }
 
  ngOnInit() {
    this.getDevices();
  }
   
  getDevices(): void {
    this.devicesService.getDevices()
    .subscribe(devices => this.devices = devices);
  }
  

}
