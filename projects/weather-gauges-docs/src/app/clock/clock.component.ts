import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import * as Prism from 'prismjs';
import demo from './demo.html';

// Trim and colorize the HTML with prismjs.
const DEMO = Prism.highlight(demo.trim(), Prism.languages.markup, 'html');

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
})
export class ClockComponent {
  /**
   * Current time to display
   */
  readonly now$: Observable<Date> = interval(1000).pipe(map(() => new Date()));
  /**
   * Sample HTML to display.
   */
  readonly demo = DEMO;
}
