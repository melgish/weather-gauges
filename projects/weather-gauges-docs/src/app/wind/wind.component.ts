import { Component, Input } from '@angular/core';
import * as Prism from 'prismjs';
import demo from './demo.html';

// Trim and colorize the HTML with prismjs.
const DEMO = Prism.highlight(demo.trim(), Prism.languages.markup, 'html');

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
})
export class WindComponent {
  /**
   * Direction wind is blowing from.
   */
  @Input() direction = Math.round(Math.random() * 360);
  /**
   * Speed wind is blowing.
   */
  @Input() speed = Math.round(Math.random() * 100);
  /**
   * Sample HTML to display.
   */
  readonly demo = DEMO;
}
