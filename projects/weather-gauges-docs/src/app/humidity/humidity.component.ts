import { Component, Input } from '@angular/core';
import * as Prism from 'prismjs';
import demo from './demo.html';

// Trim and colorize the HTML with prismjs.
const DEMO = Prism.highlight(demo.trim(), Prism.languages.markup, 'html');

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
  readonly demo = DEMO;
}
