import { Component, Input } from '@angular/core';
import demo from './demo.html';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from '../highlight/highlight.pipe';
import { PressureInDialComponent } from '@njfiorello/weather-gauges';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    HighlightPipe,
    PressureInDialComponent
  ],
  selector: 'app-inches',
  templateUrl: './inches.component.html'
})
export class InchesComponent {
  /**
   * Current pressure to display on dial.
   */
  @Input() current = (Math.random() * 7 + 25).toFixed(2);
  /**
   * Previous pressure to display on dial.
   */
  @Input() previous = (Math.random() * 7 + 25).toFixed(2);
  /**
   * Sample HTML to display.
   */
  readonly demo = demo;
}
