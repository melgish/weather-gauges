import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { WeatherGaugesModule } from '@njfiorello/weather-gauges';
import { FarenheitComponent } from './farenheit.component';

describe('FarenheitComponent', () => {
  let component: FarenheitComponent;
  let fixture: ComponentFixture<FarenheitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarenheitComponent ],
      imports: [
        FormsModule,
        WeatherGaugesModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarenheitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.demo).toBeDefined();
  });
});
