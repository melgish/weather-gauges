import { Component, Input } from '@angular/core';
import demo from './demo.html';
import { HighlightPipe } from '../highlight/highlight.pipe';
import { CommonModule } from '@angular/common';
import { CelsiusDialComponent } from '@njfiorello/weather-gauges';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [
    CelsiusDialComponent,
    CommonModule,
    FormsModule,
    HighlightPipe
  ],
  selector: 'app-celsius',
  templateUrl: './celsius.component.html',
})
export class CelsiusComponent {
  /**
   * Temperature to display on the dial.
   */
  @Input() celsius = Math.round(Math.random() * 100) - 30;
  /**
   * Sample HTML to display.
   */
  readonly demo = demo;
}
