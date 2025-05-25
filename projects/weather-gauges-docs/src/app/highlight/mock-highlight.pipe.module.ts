import { NgModule } from '@angular/core';
import { MockHighlightPipe } from './mock-highlight.pipe';

@NgModule({
  declarations: [MockHighlightPipe],
  exports: [MockHighlightPipe],
})
export class MockHighlightPipeModule {}
