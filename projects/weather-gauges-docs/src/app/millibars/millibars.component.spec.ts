import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MillibarsComponent } from './millibars.component';
import { FormsModule } from '@angular/forms';
import { WeatherGaugesModule } from '@njfiorello/weather-gauges';
import { MockHighlightPipe } from '../highlight/highlight.pipe.mock';

describe('MillibarsComponent', () => {
  let component: MillibarsComponent;
  let fixture: ComponentFixture<MillibarsComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [MillibarsComponent, MockHighlightPipe],
      imports: [FormsModule, WeatherGaugesModule],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MillibarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
