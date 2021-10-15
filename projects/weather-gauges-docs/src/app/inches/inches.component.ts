import { Component, Input } from '@angular/core';
import * as Prism from 'prismjs';
import demo from './demo.html';

// Trim and colorize the HTML with prismjs.
const DEMO = Prism.highlight(demo.trim(), Prism.languages.markup, 'html');

@Component({
  selector: 'app-inches',
  templateUrl: './inches.component.html',
})
export class InchesComponent {
  /**
   * Current pressure to display on dial.
   */
  @Input() current = (Math.random() * 7 + 25).toFixed(2);
  /**
   * Previous pressure to display on dial.
   */
  @Input() previous = (Math.random() * 7 + 25).toFixed(2);
  /**
   * Sample HTML to display.
   */
  readonly demo = DEMO;
}
