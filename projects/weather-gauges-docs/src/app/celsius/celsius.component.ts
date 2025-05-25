import { Component, Input } from '@angular/core';
import demo from './demo.html';

@Component({
  selector: 'app-celsius',
  templateUrl: './celsius.component.html',
  standalone: false
})
export class CelsiusComponent {
  /**
   * Temperature to display on the dial.
   */
  @Input() celsius = Math.round(Math.random() * 100) - 30;
  /**
   * Sample HTML to display.
   */
  readonly demo = demo;
}
