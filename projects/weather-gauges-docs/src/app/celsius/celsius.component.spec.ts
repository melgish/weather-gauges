import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CelsiusComponent } from './celsius.component';
import { MockHighlightPipeModule } from '../highlight/mock-highlight.pipe.module';
import { WeatherGaugesModule } from '@njfiorello/weather-gauges';

describe('CelsiusComponent', () => {
  let component: CelsiusComponent;
  let fixture: ComponentFixture<CelsiusComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [CelsiusComponent],
      imports: [FormsModule, WeatherGaugesModule, MockHighlightPipeModule],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CelsiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.demo).toBeDefined();
  });
});
