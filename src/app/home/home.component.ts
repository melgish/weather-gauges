import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  now = new Date();
  timer: number;

  ngOnInit() {
    this.timer = window.setInterval(() => this.now = new Date(), 1000);
  }

  ngOnDestroy() {
    window.clearInterval(this.timer);
  }
}
