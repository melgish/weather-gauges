import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelsiusDialComponent } from './celsius-dial.component';

describe('CelsiusDialComponent', () => {
  let component: CelsiusDialComponent;
  let fixture: ComponentFixture<CelsiusDialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelsiusDialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelsiusDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
