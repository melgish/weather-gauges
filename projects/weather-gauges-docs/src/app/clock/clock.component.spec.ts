import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { WeatherGaugesModule } from '@njfiorello/weather-gauges';
import { ClockComponent } from './clock.component';
import { By } from '@angular/platform-browser';
import { MockHighlightPipeModule } from '../highlight/mock-highlight.pipe.module';

describe('ClockComponent', () => {
  let component: ClockComponent;
  let fixture: ComponentFixture<ClockComponent>;

  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  beforeEach(async () =>
    TestBed.configureTestingModule({
      declarations: [ClockComponent],
      imports: [FormsModule, WeatherGaugesModule, MockHighlightPipeModule],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
     jest.advanceTimersToNextTimer();
    expect(component).toBeTruthy();
   });

  it('should display the wg-clock-dial component', () => {
    const dial = fixture.debugElement.query(By.css('wg-clock-dial'));
    expect(dial).toBeDefined();
  });

  it('should display demo code block', () => {
    const pre = fixture.debugElement.query(By.css('pre'));
    expect(pre).toBeDefined();
  });


});
