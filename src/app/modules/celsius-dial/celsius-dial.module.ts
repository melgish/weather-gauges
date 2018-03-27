import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelsiusDialComponent } from './celsius-dial.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CelsiusDialComponent],
  exports: [
    CelsiusDialComponent,
  ]
})
export class CelsiusDialModule { }
