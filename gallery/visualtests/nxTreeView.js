/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Region, Target } = require('@applitools/eyes-webdriverio');
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxTreeView', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxTreeView');
  });

  const selector = '#nx-tree-view-example .nx-tree-view:nth-child(3)',
      disabledTreeViewSelector = '#nx-tree-view-disabled-example .nx-tree-view';

  it('looks right collapsed', simpleTest(selector));
  it('looks right expanded', async function() {
    const targetElement = await browser.$(selector);
    await targetElement.click();

    await simpleTest(selector)();
  });

  it('looks right when disabled', simpleTest(disabledTreeViewSelector));
});
