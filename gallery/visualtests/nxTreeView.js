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
    await browser.refresh();
  });

  const selector = '#nx-tree-view-example .nx-tree-view:nth-child(3)',
      disabledTreeViewSelector = '#nx-tree-view-disabled-example .nx-tree-view',
      clickableTreeViewSelector = '#nx-tree-view-clickable-example .nx-tree-view',
      clickableTreeViewSidebarSelector = '#nx-tree-view-clickable-sidebar-example .nx-tree-view',
      checkboxTreeViewSelector = '#nx-tree-view-checkbox-example .gallery-example-live',
      emptyTreeViewSelector = '#nx-tree-view-empty-example .nx-tree-view';

  async function expandTreeView(selector) {
    const targetElement = await browser.$(selector);
    await targetElement.click();
  }

  function simpleExpandedTest(selector) {
    return async function() {
      await expandTreeView(selector);
      await simpleTest(selector)();
    };
  }

  function hoverExpandedTest(selector) {
    const hoverSelector = `${selector} .nx-tree-view__child:first-child`;

    return async function() {
      await expandTreeView(selector);
      await hoverTest(selector, hoverSelector)();
    }
  }

  function focusExpandedTest(selector) {
    const focusSelector = `${selector} .nx-tree-view__child:first-child`;

    return async function() {
      await expandTreeView(selector);
      await focusTest(selector, focusSelector)();
    }
  }

  function focusAndHoverExpandedTest(selector) {
    const focusSelector = `${selector} .nx-tree-view__child:first-child`;

    return async function() {
      await expandTreeView(selector);
      await focusAndHoverTest(selector, focusSelector)();
    }
  }

  it('looks right collapsed', simpleTest(selector));
  it('looks right expanded', simpleExpandedTest(selector));

  describe('NxTreeView with clickable children', function() {
    it('looks right collapsed', simpleTest(clickableTreeViewSelector));
    it('looks right expanded', simpleExpandedTest(clickableTreeViewSelector));
    it('has items that look right on hover', hoverExpandedTest(clickableTreeViewSelector));
    it('has items that look right on focus', focusExpandedTest(clickableTreeViewSelector));
    it('has items that look right on focus and hover', focusAndHoverExpandedTest(clickableTreeViewSelector));
  });

  describe('NxTreeView with clickable children in sidebar', function() {
    it('looks right collapsed', simpleTest(clickableTreeViewSidebarSelector));
    it('looks right expanded', simpleExpandedTest(clickableTreeViewSidebarSelector));
    it('has items that look right on hover', hoverExpandedTest(clickableTreeViewSidebarSelector));
    it('has items that look right on focus', focusExpandedTest(clickableTreeViewSidebarSelector));
    it('has items that look right on focus and hover', focusAndHoverExpandedTest(clickableTreeViewSidebarSelector));
  });

  describe('NxTreeView with checkbox/radio children', function() {
    it('looks right collapsed', simpleTest(checkboxTreeViewSelector));
    it('looks right expanded', simpleExpandedTest(checkboxTreeViewSelector));
  });

  describe('Empty NxTreeView', function() {
    it('looks right', simpleTest(emptyTreeViewSelector));
  });

  describe('Disabled NxTreeView', function() {
    it('looks right', simpleTest(disabledTreeViewSelector));
  });
});
