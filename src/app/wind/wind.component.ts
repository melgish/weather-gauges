import { Component, Input } from '@angular/core';

// loading this via REQUIRE so prismjs will convert it
const DEMO = require('!!prismjs-loader?lang=markup!./demo.html');

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  // styleUrls: ['./wind.component.scss']
})
export class WindComponent {
  @Input() direction = Math.round(Math.random() * 360);
  @Input() speed = Math.round(Math.random() * 100);
  demo = DEMO;
}
