import { Component, Input, type OnChanges, type SimpleChanges } from '@angular/core';

@Component({
    selector: 'wg-pressure-mb-dial',
    templateUrl: './pressure-mb-dial.component.html',
    standalone: false
})
export class PressureMbDialComponent implements OnChanges {
  @Input() current = 980;
  @Input() previous;
  rotCurrent = 'rotate(0)';
  rotPrevious = 'rotate(0)';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.current) {
      // current: [880, 1080]
      //   range = abs(880 - 1080) = 200;
      //   center = (range / 2) + min = 980;
      // arc: [-125, 125]
      //   range = abs(-125 - 125) = 250;
      // factor: arc.range / pressure.range = 250 / 200 = 1.25;
      // rotation = (t - center) * factor;
      const c = changes.current.currentValue;
      this.rotCurrent = `rotate(${((c - 980) * 1.25) || 0})`;
    }
    if (changes.previous) {
      const p = changes.previous.currentValue;
      this.rotPrevious = `rotate(${((p - 980) * 1.25) || 0})`;
    }
  }
}
