module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1'
	},
	globals: {
		'ts-jest': {
			'packageJson': '<rootDir>/package.json',
			'tsConfig': '<rootDir>/tsconfig.test.json'
		}
	},

};
