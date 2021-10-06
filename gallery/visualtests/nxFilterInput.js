/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Target } = require('@applitools/eyes-webdriverio');
const { focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxTextInput', function() {
  const searchComponentSelector = '#nx-filter-input-search-example .nx-filter-input',
      disabledComponentSelector = '#nx-filter-input-disabled-example .nx-filter-input';

  beforeEach(async function() {
    await browser.url('#/pages/NxFilterInput');
  });

  describe('Search NxFilterInput', function() {
    it('has a magnifying glass icon', simpleTest(searchComponentSelector));
  });

  describe('Disabled NxFilterInput', function() {
    it('looks disabled', simpleTest(disabledComponentSelector));
  });
});
