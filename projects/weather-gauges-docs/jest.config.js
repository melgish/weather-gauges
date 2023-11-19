module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['../../jest.setup.js'],
  // globalSetup: 'jest-preset-angular/global-setup',
  moduleNameMapper: {
    "@njfiorello/weather-gauges": "<rootDir>/../weather-gauges/src/public_api"
  },
};
