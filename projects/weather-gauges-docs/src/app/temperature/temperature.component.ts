import { Component, Input } from '@angular/core';
import demo from './demo.html';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from '../highlight/highlight.pipe';
import { TempSqDialComponent } from '@njfiorello/weather-gauges';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    HighlightPipe,
    TempSqDialComponent
  ],
    selector: 'app-temperature',
    templateUrl: './temperature.component.html',
})
export class TemperatureComponent {
  /**
   * Temperature to display on the dial.
   */
  @Input() celsius = Math.round(Math.random() * 100) - 30;
  /**
   * Sample HTML to display.
   */
  readonly demo = demo;
}
