import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { getHighlighterCore } from "shiki/core.mjs";
import solarizedLight from "shiki/themes/solarized-light.mjs";
import angularHtml from "shiki/langs/angular-html.mjs";
import getWasm from "shiki/wasm.mjs"

const highlighter = getHighlighterCore({
  langs: [angularHtml],
  themes: [solarizedLight],
  loadWasm: getWasm,
});

const options = {
  lang: 'angular-html',
  theme: 'solarized-light',
};

@Pipe({
  name: 'highlight',
  pure: true
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): Promise<SafeHtml> {
    return new Promise(async (resolve) => {
      if (!value) {
        return "";
      }
      const code = (await highlighter).codeToHtml(value.trim(), options);
      resolve(this.sanitizer.bypassSecurityTrustHtml(code));
    });
  }
}
