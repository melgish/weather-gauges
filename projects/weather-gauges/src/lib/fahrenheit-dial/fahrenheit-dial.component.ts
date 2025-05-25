import { Component, Input, type OnChanges, type SimpleChanges } from '@angular/core';

@Component({
    selector: 'wg-fahrenheit-dial',
    templateUrl: './fahrenheit-dial.component.html',
    standalone: false
})
export class FahrenheitDialComponent implements OnChanges {
  @Input() temperature = 60;
  rotate = 'rotate(0)';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.temperature) {
      // temperature: [-30, 150]
      //   range = abs(-30 - 150) = 180;
      //   center = range / 2 + min = 60;
      // arc: [-126, 126]
      //   range = abs(-126 - 126) = 252;
      // factor: arc.range / temperature.range = 1.4;
      // rotation = (t - center) * factor;
      const t = changes.temperature.currentValue;
      this.rotate = `rotate(${((t - 60) * 1.4) || 0})`;
    }
  }
}

 @Component({
    selector: 'wg-farenheit-dial',
    templateUrl: './fahrenheit-dial.component.html',
    standalone: false
})
export class FarenheitDialComponent extends FahrenheitDialComponent {}
