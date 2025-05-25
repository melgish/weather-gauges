import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    jest.advanceTimersToNextTimer();
    expect(component).toBeTruthy();
  });
});
