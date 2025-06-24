import tsconfig from './tsconfig.json' assert { type: 'json' };
import { pathsToModuleNameMapper } from 'ts-jest/utils';

/** @type {import('jest').Config} */
export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {},
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: './tsconfig.json'
    }
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  moduleNameMapper: pathsToModuleNameMapper(
    tsconfig.compilerOptions?.paths || {},
    { prefix: '<rootDir>/' }
  ),
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s']
};
