import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { CelsiusComponent } from './celsius/celsius.component';
import { ClockComponent } from './clock/clock.component';
import { FahrenheitComponent } from './fahrenheit/fahrenheit.component';
import { HighlightPipe } from './highlight/highlight.pipe';
import { HomeComponent } from './home/home.component';
import { HumidityComponent } from './humidity/humidity.component';
import { InchesComponent } from './inches/inches.component';
import { MillibarsComponent } from './millibars/millibars.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { TemperatureComponent } from './temperature/temperature.component';
import { WindComponent } from './wind/wind.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CelsiusComponent,
    ClockComponent,
    FahrenheitComponent,
    HighlightPipe,
    HomeComponent,
    HumidityComponent,
    InchesComponent,
    NgbDropdownModule,
    MillibarsComponent,
    TemperatureComponent,
    WindComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
