module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.ts'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '@/(.*)': '<rootDir>/src/$1',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  resetMocks: true,
};
