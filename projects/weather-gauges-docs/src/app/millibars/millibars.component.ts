import { Component, Input } from '@angular/core';
import demo from './demo.html';
import { FormsModule } from '@angular/forms';
import { PressureMbDialComponent } from '@njfiorello/weather-gauges';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../highlight/highlight.pipe';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    HighlightPipe,
    PressureMbDialComponent
  ],
  selector: 'app-millibars',
  templateUrl: './millibars.component.html',
})
export class MillibarsComponent {
  /**
   * Current pressure to display on dial.
   */
  @Input() current = Math.random() * 200 + 880;
  /**
   * Previous pressure to display on dial.
   */
  @Input() previous = Math.random() * 200 + 880;
  /**
   * Sample HTML to display.
   */
  readonly demo = demo;
}
