import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-device',
  templateUrl: './add-edit-device.component.html',
  styleUrls: ['./add-edit-device.component.scss']
})
export class AddEditDeviceComponent implements OnInit {

  public genders: Array<{ text: string, value: number }> = [
    { text: "Male", value: 1 },
    { text: "Female", value: 2 },
    { text: "Other", value: 3 }
  ];

  public gender: { text: string, value: number } = { text: "Female", value: 2 };
  
  public title: string = 'Add a New Device';

  constructor() { }

  ngOnInit() {
  }

}
