/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { configureToMatchImageSnapshot } = require('jest-image-snapshot');
const path = require('path');

// To try to mitigate flaky tests due to blinking text carets and the like
jest.retryTimes(3);

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffDir: path.join(__dirname, 'test-results'),
  // eslint-disable-next-line no-undef
  customSnapshotsDir: process.env.RSC_GALLERY_THEME === 'DARK' && 
      path.join(__dirname, 'visualtests', '__image_snapshots_dark__'),
  customSnapshotIdentifier: ({ defaultIdentifier }) =>
    // eslint-disable-next-line no-undef
    defaultIdentifier + (process.env.RSC_GALLERY_THEME === 'DARK' ? '-dark' : '')
});

expect.extend({ toMatchImageSnapshot });
