import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CelsiusDialModule } from './modules/celsius-dial/celsius-dial.module';
import { FarenheitDialModule } from './modules/public_api';
import { FormsModule } from '@angular/forms';
import { HumidityDialModule } from './modules/humidity-dial/humidity-dial.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule,
        CelsiusDialModule,
        FarenheitDialModule,
        HumidityDialModule,
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title '@njfiorello/weather-gauges'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('@njfiorello/weather-gauges');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('@njfiorello/weather-gauges');
  }));
});
