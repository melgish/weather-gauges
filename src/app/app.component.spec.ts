import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherGaugesModule, PressureInDialComponent } from '../weather-gauges';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CelsiusComponent } from './celsius/celsius.component';
import { FarenheitComponent } from './farenheit/farenheit.component';
import { HumidityComponent } from './humidity/humidity.component';
import { WindComponent } from './wind/wind.component';
import { APP_BASE_HREF } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { InchesComponent } from './inches/inches.component';
import { MillibarsComponent } from './millibars/millibars.component';
import { TemperatureComponent } from './temperature/temperature.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        TemperatureComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' } ,
      ],
      imports: [
        FormsModule,
        WeatherGaugesModule,
        AppRoutingModule,
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title '@njfiorello/weather-gauges'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('@njfiorello/weather-gauges');
  }));
  it('should render title in the header', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain('@njfiorello/weather-gauges');
  }));
});
