import { Component, OnInit } from '@angular/core';
// import { products } from './products';
// import { DEVICES } from '../../devices';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  // public gridData: any[] = products;

  ngOnInit() {
    // console.log(products);
    // console.log(products[1].ProductID);
  }

}
