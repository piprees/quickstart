module.exports = {
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  coverageDirectory: '<rootDir>/public/coverage',
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './public/tests',
        filename: 'index.html',
        expand: true,
      },
    ],
  ],
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['./util/testSetup.ts'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  modulePathIgnorePatterns: [
    '<rootDir>[/\\\\](node_modules|.next|.expo|.storybook|.vscode|.cypress|public|stories)[/\\\\]',
    '.+\\.spec\\.(ts|tsx)$',
  ],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](node_modules|.next|.expo|.storybook|.vscode|.cypress|public|stories)[/\\\\]',
    '.+\\.spec\\.(ts|tsx)$',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/util/fileMock.js',
  },
}
