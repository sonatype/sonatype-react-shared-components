/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest } = require('./testUtils');

describe('NxProgressBar', function() {
  beforeEach(async function() {
    await browser.url('#/pages/Progress Bar');
  });

  describe('NxProgressBar Normal', function() {
    const selector = 'nx-progress-bar-normal-example';
    it('looks right', simpleTest(selector));
  });

  describe('NxProgressBar Small', function() {
    const selector = '#nx-progress-bar-small-example';
    it('looks right', simpleTest(selector));
  });

  describe('NxProgressBar Full', function() {
    const selector = '#nx-progress-bar-full-example';
    it('looks right', simpleTest(selector));
  });

  describe('NxProgressBar Inline', function() {
    const selector = 'nx-progress-bar-inline-example';
    it('looks right', simpleTest(selector));
  });
});
