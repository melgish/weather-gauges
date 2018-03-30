import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';


// loading this via REQUIRE so prismjs will convert it
const DEMO = require('!!prismjs-loader?lang=markup!./demo.html');

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
})
export class ClockComponent implements OnInit, OnDestroy {
  now = new Date();
  demo = DEMO;
  timer: Observable<number>;
  sub: Subscription;

  constructor(private readonly ngZone: NgZone) {
    this.timer = Observable.interval(1000);
  }

  ngOnInit() {
    // this should probably be a heartbeat service anyone can subscribe to
    // prevents protractor from zoning out
    this.ngZone.runOutsideAngular(() => {
      this.sub = this.timer.subscribe(() => {
        this.ngZone.run(() => this.now = new Date());
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
