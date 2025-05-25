import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();

// Mocking shiki imports
jest.mock('shiki/core.mjs', () => ({
  getHighlighterCore: jest.fn(() =>
    Promise.resolve({
      codeToHtml: jest.fn((code: string) => code ?? ''),
    })
  ),
}));
jest.mock('shiki/themes/solarized-light.mjs', () => ({}));
jest.mock('shiki/langs/angular-html.mjs', () => ({}));
jest.mock('shiki/wasm.mjs', () => ({}));
