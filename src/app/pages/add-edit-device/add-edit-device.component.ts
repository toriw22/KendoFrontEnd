import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-edit-device',
  templateUrl: './add-edit-device.component.html',
  styleUrls: ['./add-edit-device.component.scss']
})
export class AddEditDeviceComponent implements OnInit {

  public deviceTypes: Array<{ text: string, value: number }> = [
    { text: "A", value: 1 },
    { text: "B", value: 2 },
    { text: "C", value: 3 }
  ];

  public deviceType: { text: string, value: number } = { text: "A", value: 1 };

  deviceForm = new FormGroup({
    id: new FormControl(''),
    deviceType: new FormControl(''),
    measures: new FormControl(''),
    currentReading: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

}
