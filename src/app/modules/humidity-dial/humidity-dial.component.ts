import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'wg-humidity-dial',
  templateUrl: './humidity-dial.component.html',
  // styleUrls: ['./humidity-dial.component.scss']
})
export class HumidityDialComponent implements OnChanges {
  @Input() humidity = 50;
  rotate = 'rotate(0)';

  ngOnChanges(changes: { [propkey: string]: SimpleChange }) {
    if (changes['humidity']) {
       // humidity: [0, 100]
      //   range = abs(0 - 100) = 100;
      //   center = (range / 2) + min = 50;
      // arc: [-100, 100]
      //   range = abs(-100 - 100) = 200;
      // factor: arc.range / temperature.range = 2;
      // rotation = (h - center) * factor;
      const h = changes['humidity'].currentValue;
      this.rotate = `rotate(${((h - 50) * 2) || 0})`;
    }
  }
}
