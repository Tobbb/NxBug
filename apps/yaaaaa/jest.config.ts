module.exports = {
  displayName: 'yaaaaa',
  preset: 'react-native',
  resolver: '@nx/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  moduleNameMapper: {
    '\\.svg$': '@nx/react-native/plugins/jest/svg-mock',
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-native-payfort-sdk|react-native)/',
  ],
  globals: {
    __DEV__: true,
  },
  testEnvironment: 'node',
};
