import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumidityDialComponent } from './humidity-dial.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HumidityDialComponent],
  exports: [HumidityDialComponent],
})
export class HumidityDialModule { }
