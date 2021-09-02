import { ComponentFixture, TestBed } from '@angular/core/testing';
// tslint:disable-next-line:no-implicit-dependencies
import { By } from '@angular/platform-browser';
import { DebugElement, SimpleChange } from '@angular/core';
import { HumidityDialComponent } from './humidity-dial.component';

describe('HumidityDialComponent', () => {
  let component: HumidityDialComponent;
  let fixture: ComponentFixture<HumidityDialComponent>;
  let needle: DebugElement;
  let lcd: DebugElement;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [HumidityDialComponent],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityDialComponent);
    component = fixture.componentInstance;
    needle = fixture.debugElement.query(By.css('.needle'));
    lcd = fixture.debugElement.query(By.css('.lcd'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.humidity).toBe(50);
    expect(component.rotate).toBe('rotate(0)');

    expect(needle.attributes['transform']).toBe('rotate(0)');
    expect(lcd.nativeElement.textContent).toMatch(/50.*%/);
  });

  it('should update humidity when humidity changes', () => {
    component.humidity = 37;
    component.ngOnChanges({ humidity: new SimpleChange(50, 37, false) });
    fixture.detectChanges();

    expect(component.rotate).toBe('rotate(-26)');
    expect(needle.attributes['transform']).toBe('rotate(-26)');
    expect(lcd.nativeElement.textContent).toMatch(/37.*%/);

    component.humidity = 50;
    component.ngOnChanges({ humidity: new SimpleChange(37, 50, false) });
    fixture.detectChanges();

    expect(component.rotate).toBe('rotate(0)');
    expect(needle.attributes['transform']).toBe('rotate(0)');
    expect(lcd.nativeElement.textContent).toMatch(/50.*%/);
  });

  it('should not update humidity for other changes', () => {
    component.humidity = 50;
    component.rotate = 'rotate(0)';
    fixture.detectChanges();
    component.ngOnChanges({ somethingElse: new SimpleChange(75, 60, false) });
    fixture.detectChanges();
    expect(component.rotate).toBe('rotate(0)');
  });
});
