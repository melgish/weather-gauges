import { Pipe, PipeTransform } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: false,
  pure: true,
})
export class MockHighlightPipe implements PipeTransform {
  constructor() {}

  transform(value: string): Promise<SafeHtml> {
    return Promise.resolve(value ?? "");
  }
}
