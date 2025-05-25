import { Component, Input } from '@angular/core';
import demo from './demo.html';
import { FahrenheitDialComponent } from '@njfiorello/weather-gauges';
import { HighlightPipe } from '../highlight/highlight.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [
    CommonModule,
    FahrenheitDialComponent,
    FormsModule,
    HighlightPipe,
  ],
  selector: 'app-fahrenheit',
  templateUrl: './fahrenheit.component.html',
})
export class FahrenheitComponent {
  /**
   * Temperature to display on dial
   */
  @Input() fahrenheit = Math.round(Math.random() * 180) - 30;
  /**
   * Sample HTML to display.
   */
  readonly demo = demo;
}
