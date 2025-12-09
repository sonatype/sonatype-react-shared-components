/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import globals from 'globals';

import { rscConfig, testConfig } from '../lib/eslint.config.mjs';

const testFiles = ['visualtests/*.js', 'setupTests.js'];

const galleryTestConfig = testConfig(testFiles);
galleryTestConfig.languageOptions.globals = {
  ...galleryTestConfig.languageOptions.globals,
  ...globals.node
};

export default [...rscConfig, galleryTestConfig];
