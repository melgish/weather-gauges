const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('../../tsconfig');
const options = { prefix: '<rootDir>/../..'}
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['../../jest.setup.js'],
  globalSetup: 'jest-preset-angular/global-setup',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, options),
};
