import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CelsiusComponent } from './celsius.component';

describe('CelsiusComponent', () => {
  let component: CelsiusComponent;
  let fixture: ComponentFixture<CelsiusComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [CelsiusComponent],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CelsiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.demo).toBeDefined();
  });
});
