import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, SimpleChange } from '@angular/core';
import { WindDialComponent } from './wind-dial.component';

describe('WindDialComponent', () => {
  let component: WindDialComponent;
  let fixture: ComponentFixture<WindDialComponent>;
  let needle: DebugElement;
  let lcd0: DebugElement;
  let lcd1: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDialComponent);
    component = fixture.componentInstance;
    needle = fixture.debugElement.query(By.css('.needle'));
    lcd0 = fixture.debugElement.query(By.css('.lcd-0'));
    lcd1 = fixture.debugElement.query(By.css('.lcd-1'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.direction).toBe(0);
    expect(component.speed).toBe(0);
    expect(component.rotate).toBe('rotate(0)');
    expect(needle.attributes['transform']).toBe('rotate(0)');
    expect(lcd0.nativeElement.textContent).toMatch(/0\.0/);
    expect(lcd1.nativeElement.textContent).toMatch(/0\.0/);
  });

  it('should update speed when speed changes', () => {
    component.speed = 37;
    fixture.detectChanges();
    expect(lcd1.nativeElement.textContent).toBe('37.0');
  });

  it('should update direction when direction changes', () => {
    component.direction = 37;
    component.ngOnChanges({ direction: new SimpleChange(0, 37, false) });
    fixture.detectChanges();
    expect(component.rotate).toBe('rotate(37)');
    expect(needle.attributes['transform']).toBe('rotate(37)');
    expect(lcd0.nativeElement.textContent).toMatch(/37\.0/);

    component.direction = 0;
    component.ngOnChanges({ direction: new SimpleChange(37, 0, false) });
    fixture.detectChanges();
    expect(component.rotate).toBe('rotate(0)');
    expect(needle.attributes['transform']).toBe('rotate(0)');
    expect(lcd0.nativeElement.textContent).toMatch(/0\.0/);
  });

  it('should not update direction for other changes', () => {
    component.direction = 50;
    component.rotate = 'rotate(50)';
    fixture.detectChanges();
    component.ngOnChanges({ somethingElse: new SimpleChange(75, 60, false) });
    fixture.detectChanges();
    expect(component.rotate).toBe('rotate(50)');
    expect(needle.attributes['transform']).toBe('rotate(50)');
    expect(lcd0.nativeElement.textContent).toMatch(/50\.0/);
  });
});
