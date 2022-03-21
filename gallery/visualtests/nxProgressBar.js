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

  describe('NxProgressBar variants', function() {
    const selector = 'nx-progress-bar-example';
    it('looks right', simpleTest(selector));
  });

  describe('Success NxProgressBar', function() {
    const selector = '#nx-progress-bar-success-example';
    it('looks right', simpleTest(selector));
  });

  describe('Error NxProgressBar', function() {
    const selector = '#nx-progress-bar-error-example';
    it('looks right', simpleTest(selector));
  });
});
