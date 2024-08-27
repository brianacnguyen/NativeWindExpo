module.exports = {
  // Automatically clear mock calls, instances and results before every test.
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['./src/**/*.ts', './src/**/*.tsx'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['html', 'json-summary', 'text'],

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },

  // The preset that Jest should use as a base for its configuration
  preset: 'jest-expo',

  // Reset mocks between tests
  resetMocks: true,

  // Restore mocks to their original implementations between tests
  restoreMocks: true,

  // Use ts-jest for TypeScript files
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },

  // Additional setup for React Native Testing Library
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],

  // Additional module name mappings for React Native
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // Reduce the default test timeout from 5s to 2.5s
  testTimeout: 2500,

  // Ignore transforming certain node_modules
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*)',
  ],

  // An array of regexp pattern strings that are matched against all source file paths before re-running tests in watch mode
  watchPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
};
