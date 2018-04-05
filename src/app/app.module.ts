import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { WeatherGaugesModule } from '../weather-gauges';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CelsiusComponent } from './celsius/celsius.component';
import { FarenheitComponent } from './farenheit/farenheit.component';
import { HumidityComponent } from './humidity/humidity.component';
import { WindComponent } from './wind/wind.component';
import { ClockComponent } from './clock/clock.component';
import { InchesComponent } from './inches/inches.component';
import { MillibarsComponent } from './millibars/millibars.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CelsiusComponent,
    FarenheitComponent,
    HumidityComponent,
    WindComponent,
    ClockComponent,
    InchesComponent,
    MillibarsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    WeatherGaugesModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
