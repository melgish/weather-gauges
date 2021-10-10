import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClockDialComponent } from './clock-dial.component';
import { SimpleChange } from '@angular/core';

describe('ClockDialComponent', () => {
  let component: ClockDialComponent;
  let fixture: ComponentFixture<ClockDialComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ClockDialComponent],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnChanges', () => {
    it('should call updateHands when time is set', () => {
      const now = new Date();
      jest.spyOn(component, 'updateHands');
      component.time = now;
      component.ngOnChanges({ time: new SimpleChange(null, now, false) });
      fixture.detectChanges();
      expect(component.updateHands).toHaveBeenCalledWith(now);
    });

    it('should not call updateHands if time is not set', () => {
      const now = new Date();
      jest.spyOn(component, 'updateHands');
      component.time = null;
      component.ngOnChanges({ other: new SimpleChange(null, now, false) });
      fixture.detectChanges();
      expect(component.updateHands).not.toHaveBeenCalled();
    });
  });
});
