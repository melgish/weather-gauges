import { Component, Input } from '@angular/core';
import * as Prism from 'prismjs';
import demo from './demo.html';

// Trim and colorize the HTML with prismjs.
const DEMO = Prism.highlight(demo.trim(), Prism.languages.markup, 'html');

@Component({
  selector: 'app-millibars',
  templateUrl: './millibars.component.html',
})
export class MillibarsComponent {
  /**
   * Current pressure to display on dial.
   */
  @Input() current = Math.random() * 200 + 880;
  /**
   * Previous pressure to display on dial.
   */
  @Input() previous = Math.random() * 200 + 880;
  /**
   * Sample HTML to display.
   */
  readonly demo = DEMO;
}
