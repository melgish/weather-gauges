import { Component, Input } from '@angular/core';

// loading this via REQUIRE so prismjs will convert it
const DEMO = require('!!prismjs-loader?lang=markup!./demo.html');

@Component({
  selector: 'app-farenheit',
  templateUrl: './farenheit.component.html',
  // styleUrls: ['./farenheit.component.scss']
})
export class FarenheitComponent {
  /**
   * Current temperature to display
   */
  @Input() farenheit = Math.round(Math.random() * 180) - 30;
  /**
   * Demo usage
   */
  demo = DEMO;
}
