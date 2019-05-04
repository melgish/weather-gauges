import { Component, Input } from '@angular/core';

// loading this via REQUIRE so prismjs will convert it
const DEMO = require('!!prismjs-loader?lang=markup!./demo.html');

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  // styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent {
  /**
   * Current humidity to display
   */
  @Input() humidity = Math.round(Math.random() * 100);
  /**
   * Demo usage
   */
  demo = DEMO;
}
