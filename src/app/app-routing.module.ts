import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CelsiusComponent } from './celsius/celsius.component';
import { FarenheitComponent } from './farenheit/farenheit.component';
import { HumidityComponent } from './humidity/humidity.component';
import { WindComponent } from './wind/wind.component';
import { ClockComponent } from './clock/clock.component';
import { InchesComponent } from './inches/inches.component';
import { MillibarsComponent } from './millibars/millibars.component';
import { TemperatureComponent } from './temperature/temperature.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'celsius', component: CelsiusComponent },
  { path: 'farenheit', component: FarenheitComponent },
  { path: 'humidity', component: HumidityComponent },
  { path: 'wind', component: WindComponent },
  { path: 'clock', component: ClockComponent },
  { path: 'inches', component: InchesComponent },
  { path: 'millibars', component: MillibarsComponent },
  { path: 'temperature', component: TemperatureComponent },
];

@NgModule({
  // godaddy cPanel doesn't do SPA
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
