/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxProgressBar', function() {
  const { a11yTest, simpleTest } = setupBrowser('#/pages/Progress Bar');

  describe('Normal', function() {
    const selector = '#nx-progress-bar-normal-example .gallery-example-live';
    it('looks right', simpleTest(selector));
  });

  describe('Small', function() {
    const selector = '#nx-progress-bar-small-example .gallery-example-live';
    it('looks right', simpleTest(selector));
  });

  describe('Full', function() {
    const selector = '#nx-progress-bar-full-example .gallery-example-live';
    it('looks right', simpleTest(selector));
  });

  describe('Inline', function() {
    const selector = '#nx-progress-bar-inline-example .gallery-example-live';
    it('looks right', simpleTest(selector));
  });

  describe('with steps visible', function() {
    it('looks right', simpleTest('#nx-progress-bar-steps-example .gallery-example-live'));
  });

  it('passes a11y checks', a11yTest());
});
