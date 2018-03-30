import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockDialComponent } from './clock-dial.component';

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
});
