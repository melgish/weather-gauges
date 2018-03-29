import { Component, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'wg-wind-dial',
  templateUrl: './wind-dial.component.html',
  styleUrls: ['./wind-dial.component.scss']
})
export class WindDialComponent implements OnChanges {
  @Input() direction = 0;
  @Input() speed = 0;
  @Input() units = "mph";
  rotate = 'rotate(0)';

  ngOnChanges(changes: { [propkey: string]: SimpleChange }) {
    if (changes['direction']) {
      const d = changes['direction'].currentValue;
      this.rotate = `rotate(${d || 0})`;
    }
  }
}
