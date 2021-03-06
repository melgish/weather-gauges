import { Component, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'wg-farenheit-dial',
  templateUrl: './farenheit-dial.component.html',
  // styleUrls: ['./farenheit-dial.component.scss']
})
export class FarenheitDialComponent implements OnChanges {
  @Input() temperature = 60;
  rotate = 'rotate(0)';

  ngOnChanges(changes: { [propkey: string]: SimpleChange }) {
    if (changes['temperature']) {
      // temperature: [-30, 150]
      //   range = abs(-30 - 150) = 180;
      //   center = range / 2 + min = 60;
      // arc: [-126, 126]
      //   range = abs(-126 - 126) = 252;
      // factor: arc.range / temperature.range = 1.4;
      // rotation = (t - center) * factor;
      const t = changes['temperature'].currentValue;
      this.rotate = `rotate(${((t - 60) * 1.4) || 0})`;
    }
  }
}
