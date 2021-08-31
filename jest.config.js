module.exports = {
    roots: ['<rootDir>/src'],
    collectCoveragefrom: [
        '<rootDir>/src/**/*.{ts,tsx}'
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    }
}
