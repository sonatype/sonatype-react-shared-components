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
    "<rootDir>/src",
    "<rootDir>/visualtests"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testMatch": ["<rootDir>/visualtests/*.js"],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "setupFilesAfterEnv": ["./setupTests.js"],
  "reporters": ["default", "jest-junit"]
}
