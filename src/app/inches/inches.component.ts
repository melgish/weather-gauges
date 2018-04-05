import { Component, Input } from '@angular/core';

// loading this via REQUIRE so prismjs will convert it
const DEMO = require('!!prismjs-loader?lang=markup!./demo.html');

@Component({
  selector: 'app-inches',
  templateUrl: './inches.component.html',
})
export class InchesComponent {
  @Input() current = (Math.random() * 7 + 25).toFixed(2);
  @Input() previous = (Math.random() * 7 + 25).toFixed(2);
  demo = DEMO;
}
