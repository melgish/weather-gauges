import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-celsius',
  templateUrl: './celsius.component.html',
  // styleUrls: ['./celsius.component.scss']
})
export class CelsiusComponent {
  @Input() celsius = 33.5;
}
