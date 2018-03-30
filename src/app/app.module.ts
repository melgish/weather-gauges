import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WeatherGaugesModule } from '../weather-gauges';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WeatherGaugesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
