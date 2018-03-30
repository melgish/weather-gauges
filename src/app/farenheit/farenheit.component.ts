import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-farenheit',
  templateUrl: './farenheit.component.html',
  // styleUrls: ['./farenheit.component.scss']
})
export class FarenheitComponent {
  @Input() farenheit = 77.7;
}
