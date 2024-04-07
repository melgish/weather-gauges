import { Component, Input } from '@angular/core';
import demo from './demo.html';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
})
export class HumidityComponent {
  /**
   * Current humidity to display
   */
  @Input() humidity = Math.round(Math.random() * 100);
  /**
   * Sample HTML to display.
   */
  readonly demo = demo;
}
