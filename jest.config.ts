/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */
import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
	preset: "ts-jest",
	testEnvironment: "node",
	testMatch: ["**/tests/**/*.[jt]s?(x)"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1"
	}
}

export default config
