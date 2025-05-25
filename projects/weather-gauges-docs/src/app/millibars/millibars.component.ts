import { Component, Input } from '@angular/core';
import demo from './demo.html';

@Component({
    selector: 'app-millibars',
    templateUrl: './millibars.component.html',
    standalone: false
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
  readonly demo = demo;
}
