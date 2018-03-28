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
      const t = changes['temperature'].currentValue;
      this.rotate = `rotate(${(t * 1.25 - 75.0) || 0})`;
    }
  }
}
