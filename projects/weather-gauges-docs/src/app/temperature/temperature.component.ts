import { Component, Input } from '@angular/core';
import * as Prism from 'prismjs';
import demo from './demo.html';

// Trim and colorize the HTML with prismjs.
const DEMO = Prism.highlight(demo.trim(), Prism.languages.markup, 'html');

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
  readonly demo = DEMO;
}
