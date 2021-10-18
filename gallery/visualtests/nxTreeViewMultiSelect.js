/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Target } = require('@applitools/eyes-webdriverio');
const { focusTest, simpleTest } = require('./testUtils');

describe('NxTreeViewMultiSelect', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxTreeViewMultiSelect');
  });

  const selector = '#nx-tree-view-multi-select-example .nx-tree-view--select';

  it('looks right', simpleTest(selector));

  describe('NxTreeViewMultiSelect checkbox', function() {
    const checkboxSelector = selector + ' .nx-tree-view__child:nth-child(2) .nx-radio-checkbox__input';
    it('has an offsetted blue outer border outline and glow when focused', focusTest(selector, checkboxSelector));
  });
});
