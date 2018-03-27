import { Component } from '@angular/core';

@Component({
  selector: 'wg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '@njfiorello/weather-gauges';
  farenheit = 75;
  celsius = 20;
}
