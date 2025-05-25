import { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['../../jest.setup.ts'],
  // globalSetup: 'jest-preset-angular/global-setup',
  moduleNameMapper: {
    '@njfiorello/weather-gauges': '<rootDir>/../weather-gauges/src/public_api',
  },
};

export default config;
