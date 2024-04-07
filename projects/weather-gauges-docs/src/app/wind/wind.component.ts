import { Component, Input } from '@angular/core';
import demo from './demo.html';

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
  readonly demo = demo;
}
