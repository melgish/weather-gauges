import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockDialComponent } from './clock-dial.component';
import { SimpleChange } from '@angular/core';

describe('ClockDialComponent', () => {
  let component: ClockDialComponent;
  let fixture: ComponentFixture<ClockDialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockDialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges', () => {
    it('should call updateHands for any updates', () => {
      const now = new Date();
      spyOn(component, 'updateHands');
      component.time = now;
      component.ngOnChanges({ time: new SimpleChange(null, now, false) });
      fixture.detectChanges();
      expect(component.updateHands).toHaveBeenCalledWith(now);
    });
  });
});
