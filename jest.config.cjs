module.exports = {
  preset: 'ts-jest/presets/default-esm',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
