import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InchesComponent } from './inches.component';
import { FormsModule } from '@angular/forms';
import { WeatherGaugesModule } from '@njfiorello/weather-gauges';
import { MockHighlightPipeModule } from '../highlight/mock-highlight.pipe.module';

describe('InchesComponent', () => {
  let component: InchesComponent;
  let fixture: ComponentFixture<InchesComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [InchesComponent],
      imports: [FormsModule, MockHighlightPipeModule, WeatherGaugesModule],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(InchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
