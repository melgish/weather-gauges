import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MillibarsComponent } from './millibars.component';

describe('MillibarsComponent', () => {
  let component: MillibarsComponent;
  let fixture: ComponentFixture<MillibarsComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [MillibarsComponent]
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MillibarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
