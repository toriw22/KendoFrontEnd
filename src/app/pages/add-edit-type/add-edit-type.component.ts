import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-type',
  templateUrl: './add-edit-type.component.html',
  styleUrls: ['./add-edit-type.component.scss']
})
export class AddEditTypeComponent implements OnInit {

  public title: string = 'Add a New Device Type';

  constructor() { }

  ngOnInit() {
  }

}
