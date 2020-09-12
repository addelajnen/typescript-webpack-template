module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	testMatch: ["**/tests/**/*.[jt]s?(x)"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1"
	}
};
