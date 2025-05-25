import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WindComponent } from './wind.component';

describe('WindComponent', () => {
  let component: WindComponent;
  let fixture: ComponentFixture<WindComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [],
      imports: [WindComponent],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.demo).toBeDefined();
  });
});
