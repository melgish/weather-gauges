import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MillibarsComponent } from './millibars.component';
import { FormsModule } from '@angular/forms';
import { WeatherGaugesModule } from '@njfiorello/weather-gauges';

describe('MillibarsComponent', () => {
  let component: MillibarsComponent;
  let fixture: ComponentFixture<MillibarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MillibarsComponent ],
      imports: [
        FormsModule,
        WeatherGaugesModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MillibarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
