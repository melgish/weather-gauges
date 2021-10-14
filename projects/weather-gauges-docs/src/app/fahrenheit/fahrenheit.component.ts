import { Component, Input } from '@angular/core';
import * as Prism from 'prismjs';
import demo from './demo.html';

// Trim and colorize the HTML with prismjs.
const DEMO = Prism.highlight(demo.trim(), Prism.languages.markup, 'html');

@Component({
  selector: 'app-farenheit',
  templateUrl: './farenheit.component.html',
})
export class FahrenheitComponent {
  /**
   * Temperature to display on dial
   */
  @Input() fahrenheit = Math.round(Math.random() * 180) - 30;
  /**
   * Sample HTML to display.
   */
  readonly demo = DEMO;
}
