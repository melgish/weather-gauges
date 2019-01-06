import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

const C = [0, 1, 2, 3, 4, 5, 6];
const F = [0, 1, 2, 3, 4, 5, 6];

@Component({
  selector: 'wg-temp-sq-dial',
  templateUrl: './temp-sq-dial.component.html',
  styleUrls: ['./temp-sq-dial.component.scss']
})
export class TempSqDialComponent implements OnChanges {
  @Input() temperature = 20;
  celsius = this.cscale();
  farenheit = this.fscale();

  /**
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes.temperature) {
      this.celsius = this.cscale();
      this.farenheit = this.fscale();
    }
  }

  /**
   * Create the C scale
   */
  cscale() {
    const m = (this.temperature % 5) * 4.5;
    const t = Math.floor(this.temperature / 5);
    return C.map(c => ({
      shift: 22.5 * (c - 3) - m,
      text: (t + (c - 3)) * 5
    }));
  }

  /**
   * Create the F scale
   */
  fscale() {
    const tf = this.temperature * 1.8 + 32;
    const t = Math.floor(tf / 10);
    const m = (tf % 10) * 2.5;
    return F.map(f => ({
      shift: (25 * (f - 3)) - m,
      text: (t + (f - 3)) * 10
    }));
  }
}
