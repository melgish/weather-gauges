import { Component, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'wg-celsius-dial',
  templateUrl: './celsius-dial.component.html',
  // styleUrls: ['./celsius-dial.component.scss']
})
export class CelsiusDialComponent implements OnChanges {
  @Input() temperature = 20;
  rotate = 'rotate(0)';

  ngOnChanges(changes: { [propkey: string]: SimpleChange }) {
    if (changes['temperature']) {
      // temperature: [-30, 70]
      //   range = abs(-30 - 70) = 100;
      //   center = (range / 2) + min = 20;
      // arc: [-100, 100]
      //   range = abs(-100 - 100) = 200;
      // factor: arc.range / temperature.range = 2;
      // rotation = (t - center) * factor;
      const c = changes['temperature'].currentValue;
      this.rotate = `rotate(${((c - 20) * 2) || 0})`;
    }
  }
}
