import { Component, Input } from '@angular/core';
import demo from './demo.html';

@Component({
    selector: 'app-inches',
    templateUrl: './inches.component.html',
    standalone: false
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
  readonly demo = demo;
}
