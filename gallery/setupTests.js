/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { configureToMatchImageSnapshot } = require('jest-image-snapshot');
const path = require('path');

// To try to mitigate flaky tests due to blinking text carets and the like, as well what I can only think is a browser
// bug in the screenshotting of tooltips. Tooltip screenshots are currently prone to incorrectly having a very slight
// degree of transparency, no matter how much time is given for them to fade in. Experimentation appeared to reveal
// that this only tends to happen in screenshots that are clipped (not full page) and that when multiple screenshots
// are taken of the same element right after one another it can happen in any one of them (or multiple). This
// inconsistency seems to suggest a bug the the screenshotting and/or clipping code, which appears to be implemented
// within the browser or devtools, rather than puppeteer. All we can really do about it is increase the retryTimes.
jest.retryTimes(6);

const darkEnv = process.env.RSC_GALLERY_THEME === 'DARK';

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffDir: path.join(__dirname, 'test-results'),
  customSnapshotsDir: darkEnv && path.join(__dirname, 'visualtests', '__image_snapshots_dark__'),
  customSnapshotIdentifier: ({ defaultIdentifier }) => defaultIdentifier + (darkEnv ? '-dark' : '')
});

expect.extend({ toMatchImageSnapshot });
