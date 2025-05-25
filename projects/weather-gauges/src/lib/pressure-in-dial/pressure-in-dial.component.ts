import { Component, Input, type OnChanges, type SimpleChanges } from '@angular/core';

@Component({
    selector: 'wg-pressure-in-dial',
    templateUrl: './pressure-in-dial.component.html',
    standalone: false
})
export class PressureInDialComponent implements OnChanges {
  @Input() current = 29;
  @Input() previous;
  rotCurrent = 'rotate(0)';
  rotPrevious = 'rotate(0)';

  ngOnChanges(changes: SimpleChanges ) {
    if (changes.current) {
      // current: [25, 33]
      //   range = abs(25 - 33) = 8;
      //   center = (range / 2) + min = 29;
      // arc: [-120, 120]
      //   range = abs(-120 - 120) = 240;
      // factor: arc.range / pressure.range = 3;
      // rotation = (t - center) * factor;
      const c = changes.current.currentValue;
      this.rotCurrent = `rotate(${((c - 29) * 30) || 0})`;
    }
    if (changes.previous) {
      const p = changes.previous.currentValue;
      this.rotPrevious = `rotate(${((p - 29) * 30) || 0})`;
    }
  }
}
