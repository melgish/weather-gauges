import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarenheitDialComponent } from './farenheit-dial.component';

describe('FarenheitDialComponent', () => {
  let component: FarenheitDialComponent;
  let fixture: ComponentFixture<FarenheitDialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarenheitDialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarenheitDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
