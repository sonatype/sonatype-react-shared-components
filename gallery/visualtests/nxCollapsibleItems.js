/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxCollapsibleItems', function() {
  const {
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    a11yTest,
    waitAndGetElements,
    wait
  } = setupBrowser('#/pages/Collapsible%20Items');

  const selector = '#nx-collapsible-items-example .nx-collapsible-items:nth-child(3)',
      disabledTreeViewSelector = '#nx-collapsible-items-disabled-example .nx-collapsible-items',
      clickableTreeViewSelector = '#nx-collapsible-items-clickable-example .nx-collapsible-items',
      clickableTreeViewSidebarSelector = '#nx-collapsible-items-clickable-sidebar-example .nx-collapsible-items',
      checkboxTreeViewSelector = '#nx-collapsible-items-checkbox-example .gallery-example-live',
      emptyTreeViewSelector = '#nx-collapsible-items-empty-example .nx-collapsible-items',
      actionContentCollapsibleItemsSelector = '#nx-collapsible-items-action-content-example .gallery-example-live';

  async function expandCollapsibleItems(selector) {
    const [targetElement] = await waitAndGetElements(selector);
    await targetElement.click();
    await wait(350);
  }

  function simpleExpandedTest(selector) {
    return async function() {
      await expandCollapsibleItems(selector);
      await simpleTest(selector)();
    };
  }

  function hoverExpandedTest(selector) {
    const hoverSelector = `${selector} .nx-collapsible-items__child:first-child`;

    return async function() {
      await expandCollapsibleItems(selector);
      await hoverTest(selector, hoverSelector)();
    };
  }

  function focusExpandedTest(selector) {
    const focusSelector = `${selector} .nx-collapsible-items__child:first-child`;

    return async function() {
      await expandCollapsibleItems(selector);
      await focusTest(selector, focusSelector)();
    };
  }

  function focusAndHoverExpandedTest(selector) {
    const focusSelector = `${selector} .nx-collapsible-items__child:first-child`;

    return async function() {
      await expandCollapsibleItems(selector);
      await focusAndHoverTest(selector, focusSelector)();
    };
  }

  it('looks right collapsed', simpleTest(selector));
  it('looks right expanded', simpleExpandedTest(selector));

  describe('NxCollapsibleItems with clickable children', function() {
    it('looks right collapsed', simpleTest(clickableTreeViewSelector));
    it('looks right expanded', simpleExpandedTest(clickableTreeViewSelector));
    it('has items that look right on hover', hoverExpandedTest(clickableTreeViewSelector));
    it('has items that look right on focus', focusExpandedTest(clickableTreeViewSelector));
    it('has items that look right on focus and hover', focusAndHoverExpandedTest(clickableTreeViewSelector));
  });

  describe('NxCollapsibleItems with clickable children in sidebar', function() {
    it('looks right collapsed', simpleTest(clickableTreeViewSidebarSelector));
    it('looks right expanded', simpleExpandedTest(clickableTreeViewSidebarSelector));
    it('has items that look right on hover', hoverExpandedTest(clickableTreeViewSidebarSelector));
    it('has items that look right on focus', focusExpandedTest(clickableTreeViewSidebarSelector));
    it('has items that look right on focus and hover', focusAndHoverExpandedTest(clickableTreeViewSidebarSelector));
  });

  describe('NxCollapsibleItems with checkbox/radio children', function() {
    it('looks right collapsed', simpleTest(checkboxTreeViewSelector));
    it('looks right expanded', async function() {
      const firstTreeSelector = `${checkboxTreeViewSelector} .nx-collapsible-items:first-child`,
          secondTreeSelector = `${checkboxTreeViewSelector} .nx-collapsible-items:last-child`,
          [firstTree, secondTree] = await waitAndGetElements(firstTreeSelector, secondTreeSelector);

      await firstTree.click();
      await secondTree.click();
      await wait(350);

      await simpleTest(checkboxTreeViewSelector)();
    });
  });

  describe('Empty NxCollapsibleItems', function() {
    it('looks right', simpleTest(emptyTreeViewSelector));
  });

  describe('Disabled NxCollapsibleItems', function() {
    it('looks right', simpleTest(disabledTreeViewSelector));
  });

  describe('NxCollapsibleItems with action content', function() {
    it('looks right collapsed', simpleTest(actionContentCollapsibleItemsSelector));

    it('looks right when the icon dropdown is expanded and the collapsible items is closed', async function() {
      const iconDropdownToggleSelector =
        `${actionContentCollapsibleItemsSelector} .nx-collapsible-items:first-child .nx-icon-dropdown__toggle`;
      const [iconDropdownToggle] =
        await waitAndGetElements(iconDropdownToggleSelector);

      await wait(350);

      await iconDropdownToggle.click();

      await simpleTest(actionContentCollapsibleItemsSelector)();
    });

    it('does not close the collapsible items when the action content is expanded', async function() {
      const firstTreeSelector =
        `${actionContentCollapsibleItemsSelector} .nx-collapsible-items:first-child .nx-collapsible-items__trigger`;
      const secondTreeSelector =
        `${actionContentCollapsibleItemsSelector} .nx-collapsible-items:nth-child(2) .nx-collapsible-items__trigger`;

      const iconDropdownToggleSelector =
        `${actionContentCollapsibleItemsSelector} .nx-collapsible-items:first-child .nx-icon-dropdown__toggle`;
      const [firstTree, secondTree, iconDropdownToggle] =
        await waitAndGetElements(firstTreeSelector, secondTreeSelector, iconDropdownToggleSelector);

      await firstTree.click();
      await secondTree.click();

      await wait(350);

      await iconDropdownToggle.click();

      await simpleTest(actionContentCollapsibleItemsSelector)();
    });

    it('looks right when the trigger is focused next to the action content', async function() {
      const triggerSelector =
        `${actionContentCollapsibleItemsSelector} .nx-collapsible-items:first-child .nx-collapsible-items__trigger`;

      await focusTest(actionContentCollapsibleItemsSelector, triggerSelector);
    });
  });

  // aria-required-children gets tripped up by empty lists in this component, even though it seemingly shouldn't
  it('passes a11y checks', a11yTest(builder => builder.disableRules(['aria-required-children', 'color-contrast'])));
});
