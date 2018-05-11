import { Component, Input } from '@angular/core';

// loading this via REQUIRE so prismjs will convert it
const DEMO = require('!!prismjs-loader?lang=markup!./demo.html');

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  // styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent {
  @Input() celsius = Math.round(Math.random() * 100) - 30;
  demo = DEMO;
}
