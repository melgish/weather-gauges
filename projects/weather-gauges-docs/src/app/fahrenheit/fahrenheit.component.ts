import { Component, Input } from '@angular/core';
import demo from './demo.html';

@Component({
    selector: 'app-fahrenheit',
    templateUrl: './fahrenheit.component.html',
    standalone: false
})
export class FahrenheitComponent {
  /**
   * Temperature to display on dial
   */
  @Input() fahrenheit = Math.round(Math.random() * 180) - 30;
  /**
   * Sample HTML to display.
   */
  readonly demo = demo;
}
