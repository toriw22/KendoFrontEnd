import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-device',
  templateUrl: './add-edit-device.component.html',
  styleUrls: ['./add-edit-device.component.scss']
})
export class AddEditDeviceComponent implements OnInit {

  public title: string = 'Add a New Device';

  constructor() { }

  ngOnInit() {
  }

}
