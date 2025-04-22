export default {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
      '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }],
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
  };
  