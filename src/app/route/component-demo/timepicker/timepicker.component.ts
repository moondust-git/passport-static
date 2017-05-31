import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent implements OnInit {

  constructor() {
  }

  start: Date = new Date();
  end: Date = new Date(new Date().getTime() + 1000 * 60 * 60 * 20);

  ngOnInit() {
  }
}
