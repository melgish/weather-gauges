import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange, DebugElement } from '@angular/core';
// tslint:disable-next-line:no-implicit-dependencies
import { By } from '@angular/platform-browser';
import { FahrenheitDialComponent } from './fahrenheit-dial.component';

describe('FahrenheitDialComponent', () => {
  let component: FahrenheitDialComponent;
  let fixture: ComponentFixture<FahrenheitDialComponent>;
  let needle: DebugElement;
  let lcd: DebugElement;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [FahrenheitDialComponent],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FahrenheitDialComponent);
    component = fixture.componentInstance;
    needle = fixture.debugElement.query(By.css('.needle'));
    lcd = fixture.debugElement.query(By.css('.lcd'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.temperature).toBe(60);
    expect(component.rotate).toBe('rotate(0)');

    expect(needle.attributes['transform']).toBe('rotate(0)');
    expect(lcd.nativeElement.textContent).toMatch(/60.*F/);
  });

  it('should update temperature when temperature changes', () => {
    component.temperature = 75;
    component.ngOnChanges({ temperature: new SimpleChange(60, 75, false) });
    fixture.detectChanges();

    expect(component.rotate).toBe('rotate(21)');
    expect(needle.attributes['transform']).toBe('rotate(21)');
    expect(lcd.nativeElement.textContent).toMatch(/75.*F/);

    component.temperature = 60;
    component.ngOnChanges({ temperature: new SimpleChange(75, 60, false) });
    fixture.detectChanges();

    expect(component.rotate).toBe('rotate(0)');
    expect(needle.attributes['transform']).toBe('rotate(0)');
    expect(lcd.nativeElement.textContent).toMatch(/60.*F/);
  });

  it('should not update temperature for other changes', () => {
    component.temperature = 60;
    component.rotate = 'rotate(0)';
    fixture.detectChanges();
    component.ngOnChanges({ somethingElse: new SimpleChange(75, 60, false) });
    fixture.detectChanges();
    expect(component.rotate).toBe('rotate(0)');
  });
});
