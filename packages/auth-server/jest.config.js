module.exports = {
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testMatch: ['**/*.test.js'],
    setupFilesAfterEnv: ['./jest.setup.js'],
};