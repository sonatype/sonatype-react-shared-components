/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
// copied from the ts-jest tutorial: https://basarat.gitbooks.io/typescript/docs/testing/jest.html
const nodeCrypto = require('crypto');

module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.(t|j)sx?$": ["ts-jest", { tsconfig: '<rootDir>/tsconfig.test.json' }]
  },
  "transformIgnorePatterns": ['/node_modules/(?!(pretty-bytes|@react-hook)/)'],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "testEnvironment": './src/__testutils__/jest-environment-jsdom-custom.js',
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "setupFilesAfterEnv": ["./src/setupTests.ts"],
  "moduleNameMapper": {
    "\\.s?css$": "<rootDir>/src/__mocks__/styleMock.ts",
    "\\.(png|svg)$": "<rootDir>/src/__mocks__/imgMock.ts"
  },
  "reporters": ["default", "jest-junit"]
}
