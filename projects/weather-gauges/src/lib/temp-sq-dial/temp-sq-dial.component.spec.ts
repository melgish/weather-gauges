import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempSqDialComponent } from './temp-sq-dial.component';
import { SimpleChange } from '@angular/core';

describe('TempSqDialComponent', () => {
  let component: TempSqDialComponent;
  let fixture: ComponentFixture<TempSqDialComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [TempSqDialComponent],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TempSqDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update temperature when temperature changes', () => {
    component.temperature = 37;
    component.ngOnChanges({ temperature: new SimpleChange(20, 37, false) });
    fixture.detectChanges();
    expect(component.celsius[3].text).toBe(35);
    expect(component.fahrenheit[3].text).toBe(90);
    component.temperature = 20;
    component.ngOnChanges({ temperature: new SimpleChange(37, 20, false) });
    fixture.detectChanges();
    expect(component.celsius[3].text).toBe(20);
    expect(component.fahrenheit[3].text).toBe(60);
  });

  it('should not update temperature for other changes', () => {
    component.temperature = 20;
    fixture.detectChanges();
    expect(component.celsius[3].text).toBe(20);
    expect(component.fahrenheit[3].text).toBe(60);
    component.ngOnChanges({ somethingElse: new SimpleChange(37, 20, false) });
    fixture.detectChanges();
    expect(component.celsius[3].text).toBe(20);
    expect(component.fahrenheit[3].text).toBe(60);
  });
});
