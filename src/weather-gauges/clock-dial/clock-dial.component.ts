import { Component, Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'wg-clock-dial',
  templateUrl: './clock-dial.component.html',
  // styleUrls: ['./clock-dial.component.scss']
})
export class ClockDialComponent implements OnChanges {
  @Input() time = new Date();
  second: string;
  minute: string;
  hour: string;

  constructor() {
    this.updateHands(this.time);
  }

  updateHands(time) {
    // 360 / 60 = 6 degrees per second
    let s = time.getSeconds() * 6;
    // 360 / 60 = 6 degrees per minute plus partial second
    let m = time.getMinutes() * 6 + s / 60;
    // 360 / 12 = 30 degrees per hour plus partials
    let h = time.getHours() * 30 + m / 12;

    this.time = time;
    this.second = `rotate(${s})`;
    this.minute = `rotate(${m})`;
    this.hour = `rotate(${h})`;
  }

  ngOnChanges(changes: { [propkey: string]: SimpleChange }) {
    this.updateHands(this.time);
  }
}
