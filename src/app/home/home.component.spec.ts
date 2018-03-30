import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherGaugesModule } from '../../weather-gauges';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        FormsModule,
        WeatherGaugesModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    this.unsubscribe = () => {};
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    // replace observable, call it immediately
    spyOn(component.timer, 'subscribe').and.callFake(fn => (fn(), this));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
