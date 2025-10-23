export default {
  testEnvironment: 'node',
  roots: ['<rootDir>/specs'],
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'reports/api/junit', outputName: 'junit.xml' }]
  ]
};
