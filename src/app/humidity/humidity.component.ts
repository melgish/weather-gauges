import { Component, OnInit, Input } from '@angular/core';

// loading this via REQUIRE so prismjs will convert it
const DEMO = require('!!prismjs-loader?lang=markup!./demo.html');

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  // styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent {
  @Input() humidity = Math.round(Math.random() * 100);
  demo = DEMO;
}
