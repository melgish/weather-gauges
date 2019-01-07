import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherGaugesModule } from '@njfiorello/weather-gauges';
import { ClockComponent } from './clock.component';

describe('ClockComponent', () => {
  let component: ClockComponent;
  let fixture: ComponentFixture<ClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockComponent ],
      imports: [
        FormsModule,
        WeatherGaugesModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    this.unsubscribe = () => {};
    fixture = TestBed.createComponent(ClockComponent);
    component = fixture.componentInstance;
    // replace observable, call it immediately
    spyOn(component.timer, 'subscribe').and.callFake(fn => (fn(), this));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.demo).toBeDefined();
  });
});
