import { Component, Input } from '@angular/core';

// loading this via REQUIRE so prismjs will convert it
const DEMO = require('!!prismjs-loader?lang=markup!./demo.html');

@Component({
  selector: 'app-celsius',
  templateUrl: './celsius.component.html',
  // styleUrls: ['./celsius.component.scss']
})
export class CelsiusComponent {
  @Input() celsius = Math.round(Math.random() * 100) - 30;
  demo = DEMO;
}
