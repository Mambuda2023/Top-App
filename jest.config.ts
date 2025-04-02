import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
	dir: './',
})

const config: Config = {
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^.+\\.svg$': 'jest-svg-transformer',

		'^.+\\.css$': 'identity-obj-proxy',
	},
}

export default createJestConfig(config)
