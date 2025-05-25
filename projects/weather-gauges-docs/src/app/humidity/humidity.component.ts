import { Component, Input } from '@angular/core';
import demo from './demo.html';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from '../highlight/highlight.pipe';
import { HumidityDialComponent } from '@njfiorello/weather-gauges';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    HighlightPipe,
    HumidityDialComponent
  ],
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
})
export class HumidityComponent {
  /**
   * Current humidity to display
   */
  @Input() humidity = Math.round(Math.random() * 100);
  /**
   * Sample HTML to display.
   */
  readonly demo = demo;
}
