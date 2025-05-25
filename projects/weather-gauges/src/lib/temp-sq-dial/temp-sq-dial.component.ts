import { CommonModule } from '@angular/common';
import { Component, Input, type OnChanges, type SimpleChanges } from '@angular/core';

const T = [0, 1, 2, 3, 4, 5, 6];


@Component({
  imports: [CommonModule],
  selector: 'wg-temp-sq-dial',
  templateUrl: './temp-sq-dial.component.html',
})
export class TempSqDialComponent implements OnChanges {
  @Input() temperature = 20;
  celsius = this.cscale();
  fahrenheit = this.fscale();

  /**
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes.temperature) {
      this.celsius = this.cscale();
      this.fahrenheit = this.fscale();
    }
  }

  /**
   * Create the C scale
   */
  cscale() {
    const m = (this.temperature % 5) * 4.5;
    const t = Math.floor(this.temperature / 5);
    return T.map((c) => ({
      shift: 22.5 * (c - 3) - m,
      text: (t + (c - 3)) * 5,
    }));
  }

  /**
   * Create the F scale
   */
  fscale() {
    const tf = this.temperature * 1.8 + 32;
    const t = Math.floor(tf / 10);
    const m = (tf % 10) * 2.5;
    return T.map((f) => ({
      shift: 25 * (f - 3) - m,
      text: (t + (f - 3)) * 10,
    }));
  }
}
