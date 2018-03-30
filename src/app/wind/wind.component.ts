import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  // styleUrls: ['./wind.component.scss']
})
export class WindComponent {
  @Input() direction = 220;
  @Input() speed = 8.2;
  @Input() units = "MPH";
}
