import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelsiusDialComponent } from './celsius-dial/celsius-dial.component';
import { FarenheitDialComponent } from './farenheit-dial/farenheit-dial.component';
import { HumidityDialComponent } from './humidity-dial/humidity-dial.component';
import { WindDialComponent } from './wind-dial/wind-dial.component';
import { ClockDialComponent } from './clock-dial/clock-dial.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CelsiusDialComponent,
    FarenheitDialComponent,
    HumidityDialComponent,
    WindDialComponent,
    ClockDialComponent
  ],
  exports: [
    CelsiusDialComponent,
    FarenheitDialComponent,
    HumidityDialComponent,
    WindDialComponent,
    ClockDialComponent
  ]
})
export class WeatherGaugesModule { }
