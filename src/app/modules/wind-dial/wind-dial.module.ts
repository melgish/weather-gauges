import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindDialComponent } from './wind-dial.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WindDialComponent],
  exports: [WindDialComponent]
})
export class WindDialModule { }
