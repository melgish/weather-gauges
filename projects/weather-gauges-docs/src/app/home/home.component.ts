import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  CelsiusDialComponent,
  ClockDialComponent,
  FahrenheitDialComponent,
  HumidityDialComponent,
  PressureInDialComponent,
  PressureMbDialComponent,
  TempSqDialComponent,
  WindDialComponent,
} from '@njfiorello/weather-gauges';
import { Observable, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  imports: [
    CelsiusDialComponent,
    CommonModule,
    ClockDialComponent,
    FahrenheitDialComponent,
    HumidityDialComponent,
    PressureInDialComponent,
    PressureMbDialComponent,
    TempSqDialComponent,
    WindDialComponent,
  ],
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  /**
   * Current time to display
   */
  now$: Observable<Date> = interval(1000).pipe(map(() => new Date()));
  timer: Observable<number>;
  sub: Subscription;

  // randomize the values
  celsius = Math.random() * 100 - 25;
  fahrenheit = (this.celsius * 9) / 5 + 32;
  // mb = in / 0.029530
  currentInches = Math.random() * 6 + 26;
  currentMillibars = this.currentInches / 0.02953;
  previousInches = Math.random() * 6 + 26;
  previousMillibars = this.previousInches / 0.02953;
  humidity = Math.random() * 100;
}
