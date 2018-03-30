import { Component, OnInit, Input } from '@angular/core';

// loading this via REQUIRE so prismjs will convert it
const DEMO = require('!!prismjs-loader?lang=markup!./demo.html');

@Component({
  selector: 'app-farenheit',
  templateUrl: './farenheit.component.html',
  // styleUrls: ['./farenheit.component.scss']
})
export class FarenheitComponent {
  @Input() farenheit = Math.round(Math.random() * 180) - 30;
  demo = DEMO;
}
