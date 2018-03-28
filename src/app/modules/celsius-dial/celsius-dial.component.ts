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
      const t = changes['temperature'].currentValue;
      this.rotate = `rotate(${((t - 20) * 2.25) || 0})`;
    }
  }
}
