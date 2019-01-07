import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

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

  /**
   * Instances are constructed by angular
   */
  constructor() {
    this.updateHands(this.time);
  }

  /**
   * Update display
   * @param time time to display on the clock
   */
  updateHands(time: Date): void {
    // 360 / 60 = 6 degrees per second
    const s = time.getSeconds() * 6;
    // 360 / 60 = 6 degrees per minute plus partial second
    const m = time.getMinutes() * 6 + s / 60;
    // 360 / 12 = 30 degrees per hour plus partials
    const h = time.getHours() * 30 + m / 12;

    this.time = time;
    this.second = `rotate(${s})`;
    this.minute = `rotate(${m})`;
    this.hour = `rotate(${h})`;
  }

  /**
   * Called by angular on update to input
   * @ignore
   * @param changes angular changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    // using async pipe resulted in null...
    if (this.time) {
      this.updateHands(this.time);
    }
  }
}
