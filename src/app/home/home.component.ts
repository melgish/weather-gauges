import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  now = new Date();
  timer: Observable<number>;
  sub: Subscription;

  // randomize the values
  celsius = Math.random() * 100 - 25;
  farenheit = this.celsius * 9 / 5 + 32;
  // mb = in / 0.029530
  currentInches = Math.random() * 6 + 26;
  currentMillibars = this.currentInches / 0.029530;
  previousInches = Math.random() * 6 + 26;
  previousMillibars = this.previousInches / 0.029530;
  humidity = Math.random() * 100;

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
