import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelsiusDialComponent } from './celsius-dial/celsius-dial.component';
import { FahrenheitDialComponent } from './fahrenheit-dial/fahrenheit-dial.component';
import { HumidityDialComponent } from './humidity-dial/humidity-dial.component';
import { WindDialComponent } from './wind-dial/wind-dial.component';
import { ClockDialComponent } from './clock-dial/clock-dial.component';
import { PressureInDialComponent } from './pressure-in-dial/pressure-in-dial.component';
import { PressureMbDialComponent } from './pressure-mb-dial/pressure-mb-dial.component';
import { TempSqDialComponent } from './temp-sq-dial/temp-sq-dial.component';

@NgModule({
  imports: [
    CommonModule,
    CelsiusDialComponent,
    ClockDialComponent,
    FahrenheitDialComponent,
    HumidityDialComponent,
    PressureInDialComponent,
    PressureMbDialComponent,
    TempSqDialComponent,
    WindDialComponent,
  ],
  declarations: [],
  exports: [
    CelsiusDialComponent,
    ClockDialComponent,
    FahrenheitDialComponent,
    HumidityDialComponent,
    WindDialComponent,
    PressureInDialComponent,
    PressureMbDialComponent,
    TempSqDialComponent,
  ],
})
export class WeatherGaugesModule {}
