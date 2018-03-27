import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FarenheitDialModule } from './modules/farenheit-dial/farenheit-dial.module';
import { CelsiusDialModule } from './modules/celsius-dial/celsius-dial.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FarenheitDialModule,
    CelsiusDialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
