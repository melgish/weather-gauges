import { Component, OnInit } from '@angular/core';

// loading this via REQUIRE so prismjs will convert it
const DEMO = require('!!prismjs-loader?lang=markup!./demo.html');

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
})
export class ClockComponent implements OnInit {
  now = new Date();
  demo = DEMO;
  timer: number;

  ngOnInit() {
    this.timer = window.setInterval(() => this.now = new Date(), 1000);
  }

  ngOnDestroy() {
    window.clearInterval(this.timer);
  }
}
