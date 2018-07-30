import { Component, OnInit, Directive } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent implements OnInit {
  
  // devices: Device[];
  
  // constructor(private devicesService: DevicesService) { }
 
  ngOnInit() {
    // this.getDevices();
  }
   
  // getDevices(): void {
  //   this.devicesService.getDevices()
  //   .subscribe(devices => this.devices = devices);
  // }
  
  
  // public gridData: any[] = this.devices;

  
}
