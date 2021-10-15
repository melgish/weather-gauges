import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { WeatherGaugesModule } from '@njfiorello/weather-gauges';
import { FahrenheitComponent } from './fahrenheit.component';

describe('FahrenheitComponent', () => {
  let component: FahrenheitComponent;
  let fixture: ComponentFixture<FahrenheitComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [FahrenheitComponent],
      imports: [FormsModule, WeatherGaugesModule],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FahrenheitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.demo).toBeDefined();
  });
});
