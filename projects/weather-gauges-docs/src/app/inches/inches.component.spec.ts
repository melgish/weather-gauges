import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InchesComponent } from './inches.component';

describe('InchesComponent', () => {
  let component: InchesComponent;
  let fixture: ComponentFixture<InchesComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [InchesComponent]
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(InchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
