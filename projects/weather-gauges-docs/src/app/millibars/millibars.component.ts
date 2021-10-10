import { Component, Input } from '@angular/core';

// loading this via REQUIRE so prismjs will convert it
const DEMO = require('!!prismjs-loader?lang=markup!./demo.html');

@Component({
  selector: 'app-millibars',
  templateUrl: './millibars.component.html',
})
export class MillibarsComponent {
  @Input() current = Math.random() * 200 + 880;
  @Input() previous = Math.random() * 200 + 880;
  demo = DEMO;
}
