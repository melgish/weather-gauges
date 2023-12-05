import { Component, Input, type OnChanges, type SimpleChanges } from '@angular/core';

@Component({
  selector: 'wg-wind-dial',
  templateUrl: './wind-dial.component.html'
})
export class WindDialComponent implements OnChanges {
  @Input() direction = 0;
  @Input() speed = 0;
  @Input() units = 'mph';
  rotate = 'rotate(0)';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.direction) {
      const d = changes.direction.currentValue;
      this.rotate = `rotate(${d || 0})`;
    }
  }
}
