import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import demo from './demo.html';
import { HighlightPipe } from '../highlight/highlight.pipe';
import { CommonModule } from '@angular/common';
import { ClockDialComponent } from '@njfiorello/weather-gauges';

@Component({
    imports: [
      ClockDialComponent,
      CommonModule,
      HighlightPipe
    ],
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
  readonly demo = demo;
}
