import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  preset: "blitz",
}

export default config

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.test.json",
    },
  },
}
