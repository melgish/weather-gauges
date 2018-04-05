import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InchesComponent } from './inches.component';
import { FormsModule } from '@angular/forms';
import { WeatherGaugesModule } from '../../weather-gauges';

describe('InchesComponent', () => {
  let component: InchesComponent;
  let fixture: ComponentFixture<InchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InchesComponent ],
      imports: [
        FormsModule,
        WeatherGaugesModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
