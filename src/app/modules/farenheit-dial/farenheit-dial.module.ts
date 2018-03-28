import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarenheitDialComponent } from './farenheit-dial.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FarenheitDialComponent],
  exports: [FarenheitDialComponent]
})
export class FarenheitDialModule { }
