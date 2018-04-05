import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, SimpleChange } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PressureMbDialComponent } from './pressure-mb-dial.component';


describe('PressureMbDialComponent', () => {
  let component: PressureMbDialComponent;
  let fixture: ComponentFixture<PressureMbDialComponent>;
  let redNeedle: DebugElement;
  let blueNeedle: DebugElement;
  let lcd: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressureMbDialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressureMbDialComponent);
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

  it('should hide blue needle when there\'s no previous value', () => {
    component.previous = false;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.blue-needle'))).toBeNull();
  });

  it('should update current pressure when current changes', () => {
    component.current = 1080;
    component.ngOnChanges({ current: new SimpleChange(1080, 980, false) });
    fixture.detectChanges();

    expect(component.rotCurrent).toBe('rotate(0)');
    expect(redNeedle.attributes['transform']).toBe('rotate(0)');
    expect(lcd.nativeElement.textContent).toBe('1,080 mb');

    component.current = 980;
    component.ngOnChanges({ current: new SimpleChange(980, 1080, false) });
    fixture.detectChanges();

    expect(component.rotCurrent).toBe('rotate(125)');
    expect(redNeedle.attributes['transform']).toBe('rotate(125)');
    expect(lcd.nativeElement.textContent).toBe('980 mb');
  });

  it('should update previous pressure when previous changes', () => {
    component.previous = 1080;
    component.ngOnChanges({ previous: new SimpleChange(1080, 980, false) });
    fixture.detectChanges();

    expect(component.rotPrevious).toBe('rotate(0)');
    expect(blueNeedle.attributes['transform']).toBe('rotate(0)');

    component.previous = 1080;
    component.ngOnChanges({ previous: new SimpleChange(980, 1080, false) });
    fixture.detectChanges();

    expect(component.rotPrevious).toBe('rotate(125)');
    expect(blueNeedle.attributes['transform']).toBe('rotate(125)');
  });

  it('should not update for other changes', () => {
    component.current = 980;
    component.rotCurrent = 'rotate(0)';
    component.previous = 980;
    component.rotPrevious = 'rotate(0)';
    fixture.detectChanges();
    component.ngOnChanges({ somethingElse: new SimpleChange(20, 60, false) });
    fixture.detectChanges();
    expect(component.rotCurrent).toBe('rotate(0)');
    expect(component.rotPrevious).toBe('rotate(0)');
  });

});
