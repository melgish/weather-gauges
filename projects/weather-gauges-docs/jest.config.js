const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('../../tsconfig');
const options = { prefix: '<rootDir>/../..'}
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['../../jest.setup.js'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, options),
};
