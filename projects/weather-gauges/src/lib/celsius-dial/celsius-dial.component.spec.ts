import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange, DebugElement } from '@angular/core';
// Dependencies used for unit tests are not required for library.
// tslint:disable-next-line:no-implicit-dependencies
import { By } from '@angular/platform-browser';
import { CelsiusDialComponent } from './celsius-dial.component';

describe('CelsiusDialComponent', () => {
  let component: CelsiusDialComponent;
  let fixture: ComponentFixture<CelsiusDialComponent>;
  let needle: DebugElement;
  let lcd: DebugElement;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [CelsiusDialComponent],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CelsiusDialComponent);
    component = fixture.componentInstance;
    needle = fixture.debugElement.query(By.css('.needle'));
    lcd = fixture.debugElement.query(By.css('.lcd'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.temperature).toBe(20);
    expect(component.rotate).toBe('rotate(0)');

    expect(needle.attributes['transform']).toBe('rotate(0)');
    expect(lcd.nativeElement.textContent).toMatch(/20.*C/);
  });

  it('should update temperature when temperature changes', () => {
    component.temperature = 37;
    component.ngOnChanges({ temperature: new SimpleChange(20, 37, false) });
    fixture.detectChanges();

    expect(component.rotate).toBe('rotate(34)');
    expect(needle.attributes['transform']).toBe('rotate(34)');
    expect(lcd.nativeElement.textContent).toMatch(/37.*C/);

    component.temperature = 20;
    component.ngOnChanges({ temperature: new SimpleChange(37, 20, false) });
    fixture.detectChanges();

    expect(component.rotate).toBe('rotate(0)');
    expect(needle.attributes['transform']).toBe('rotate(0)');
    expect(lcd.nativeElement.textContent).toMatch(/20.*C/);
  });

  it('should not update temperature for other changes', () => {
    component.temperature = 20;
    component.rotate = 'rotate(0)';
    fixture.detectChanges();
    component.ngOnChanges({ somethingElse: new SimpleChange(37, 20, false) });
    fixture.detectChanges();
    expect(component.rotate).toBe('rotate(0)');
  });
});
