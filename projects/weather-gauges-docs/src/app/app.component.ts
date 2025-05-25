/* eslint-disable @angular-eslint/prefer-standalone */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = '@njfiorello/weather-gauges';
  fahrenheit = 75;
  celsius = 20;
  humidity = 63.5;
  direction = 45;
  speed = 12.5;
  units = 'MPH';
}
