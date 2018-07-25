import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guage',
  templateUrl: './guage.component.html',
  styleUrls: ['./guage.component.scss']
})
export class GuageComponent implements OnInit {

  public value: number = 30;
  
  constructor() { }

  ngOnInit() {
  }

}
