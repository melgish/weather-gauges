import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

// loading this via REQUIRE so prismjs will convert it at compile time.
const DEMO = require('!!prismjs-loader?lang=markup!./demo.html');

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
})
export class ClockComponent {
  /**
   * Current time to display
   */
  now$: Observable<Date> = interval(1000).pipe(map(() => new Date()));
}
