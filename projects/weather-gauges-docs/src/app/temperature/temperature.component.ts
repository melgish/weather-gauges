import { Component, Input } from '@angular/core';
import demo from './demo.html';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent {
  /**
   * Temperature to display on the dial.
   */
  @Input() celsius = Math.round(Math.random() * 100) - 30;
  /**
   * Sample HTML to display.
   */
  readonly demo = demo;
}
