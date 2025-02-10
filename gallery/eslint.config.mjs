/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import eslintJs from '@eslint/js';
import typescriptEslint from "typescript-eslint";
import reactEslint from 'eslint-plugin-react';
import stylistic from '@stylistic/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

import { rscConfig, testConfig } from '../lib/eslint.config.mjs';

const files = ['**/*.{j,t}s{x,}'];
const testFiles = ['visualtests/*.js', 'setupTests.js'];

const galleryTestConfig = testConfig(testFiles);
galleryTestConfig.languageOptions.globals = {
  ...galleryTestConfig.languageOptions.globals,
  ...globals.node
};

export default [...rscConfig, galleryTestConfig];
