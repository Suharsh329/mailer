module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1', // Ensure this alias matches your tsconfig if used
  },
};
