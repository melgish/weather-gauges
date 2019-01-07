import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherGaugesModule } from '@njfiorello/weather-gauges';
import { HumidityComponent } from './humidity.component';

describe('HumidityComponent', () => {
  let component: HumidityComponent;
  let fixture: ComponentFixture<HumidityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumidityComponent ],
      imports: [
        FormsModule,
        WeatherGaugesModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.demo).toBeDefined();
  });
});
