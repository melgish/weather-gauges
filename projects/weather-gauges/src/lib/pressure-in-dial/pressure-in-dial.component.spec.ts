import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, SimpleChange } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PressureInDialComponent } from './pressure-in-dial.component';

describe('PressureInDialComponent', () => {
  let component: PressureInDialComponent;
  let fixture: ComponentFixture<PressureInDialComponent>;
  let redNeedle: DebugElement;
  let blueNeedle: DebugElement;
  let lcd: DebugElement;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [PressureInDialComponent],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PressureInDialComponent);
    component = fixture.componentInstance;
    // need pressure to be truthy
    component.previous = 25;
    fixture.detectChanges();
    redNeedle = fixture.debugElement.query(By.css('.red-needle'));
    blueNeedle = fixture.debugElement.query(By.css('.blue-needle'));
    lcd = fixture.debugElement.query(By.css('.lcd'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide blue needle when there is no previous value', () => {
    component.previous = false;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.blue-needle'))).toBeNull();
  });

  it('should update current pressure when current changes', () => {
    component.current = 26;
    component.ngOnChanges({ current: new SimpleChange(26, 29, false) });
    fixture.detectChanges();

    expect(component.rotCurrent).toBe('rotate(0)');
    expect(redNeedle.attributes.transform).toBe('rotate(0)');
    expect(lcd.nativeElement.textContent).toBe('26.00 in');

    component.current = 29;
    component.ngOnChanges({ current: new SimpleChange(29, 26, false) });
    fixture.detectChanges();

    expect(component.rotCurrent).toBe('rotate(-90)');
    expect(redNeedle.attributes.transform).toBe('rotate(-90)');
    expect(lcd.nativeElement.textContent).toBe('29.00 in');
  });

  it('should update previous pressure when previous changes', () => {
    component.previous = 26;
    component.ngOnChanges({ previous: new SimpleChange(26, 29, false) });
    fixture.detectChanges();

    expect(component.rotPrevious).toBe('rotate(0)');
    expect(blueNeedle.attributes.transform).toBe('rotate(0)');

    component.previous = 26;
    component.ngOnChanges({ previous: new SimpleChange(29, 26, false) });
    fixture.detectChanges();

    expect(component.rotPrevious).toBe('rotate(-90)');
    expect(blueNeedle.attributes.transform).toBe('rotate(-90)');
  });

  it('should not update for other changes', () => {
    component.current = 29;
    component.rotCurrent = 'rotate(0)';
    component.previous = 29;
    component.rotPrevious = 'rotate(0)';
    fixture.detectChanges();
    component.ngOnChanges({ somethingElse: new SimpleChange(20, 60, false) });
    fixture.detectChanges();
    expect(component.rotCurrent).toBe('rotate(0)');
    expect(component.rotPrevious).toBe('rotate(0)');
  });
});
