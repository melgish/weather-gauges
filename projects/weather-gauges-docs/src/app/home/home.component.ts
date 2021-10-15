import { Component } from '@angular/core';
import { Observable, Subscription, interval} from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /**
   * Current time to display
   */
  now$: Observable<Date> = interval(1000).pipe(map(() => new Date()));
  timer: Observable<number>;
  sub: Subscription;

  // randomize the values
  celsius = Math.random() * 100 - 25;
  fahrenheit = this.celsius * 9 / 5 + 32;
  // mb = in / 0.029530
  currentInches = Math.random() * 6 + 26;
  currentMillibars = this.currentInches / 0.029530;
  previousInches = Math.random() * 6 + 26;
  previousMillibars = this.previousInches / 0.029530;
  humidity = Math.random() * 100;
}
