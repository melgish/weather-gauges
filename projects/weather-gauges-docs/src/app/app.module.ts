import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { WeatherGaugesModule } from '@njfiorello/weather-gauges';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CelsiusComponent } from './celsius/celsius.component';
import { FahrenheitComponent } from './fahrenheit/fahrenheit.component';
import { HumidityComponent } from './humidity/humidity.component';
import { WindComponent } from './wind/wind.component';
import { ClockComponent } from './clock/clock.component';
import { InchesComponent } from './inches/inches.component';
import { MillibarsComponent } from './millibars/millibars.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { HighlightPipe } from './highlight/highlight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CelsiusComponent,
    FahrenheitComponent,
    HumidityComponent,
    WindComponent,
    ClockComponent,
    InchesComponent,
    MillibarsComponent,
    TemperatureComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbDropdownModule,
    WeatherGaugesModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
