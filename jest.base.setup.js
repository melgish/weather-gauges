import 'jest-preset-angular';
import 'zone.js';
import 'zone.js/testing';
const { TestBed } = require('@angular/core/testing');
const {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} = require('@angular/platform-browser-dynamic/testing');

// This should only be called once.
TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
