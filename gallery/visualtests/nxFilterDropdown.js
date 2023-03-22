/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxFilterDropdown', function() {
  const {
    waitAndGetElements,
    moveMouseAway,
    scrollIntoView,
    getPage,
    clickTest,
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    a11yTest,
    checkScreenshot
  } = setupBrowser('#/pages/Filter Dropdown');

  async function isInDocument(el) {
    return el.evaluate(e => e.isConnected);
  }

  const tableExampleSelector = '#nx-filter-dropdown-table-example .gallery-example-live',
      dropdownSelector = `${tableExampleSelector} .nx-filter-dropdown`,
      toggleSelector = `${dropdownSelector} .nx-dropdown__toggle`,
      shortDropdownSelector = '#nx-filter-dropdown-short-example .nx-filter-dropdown',
      nonDefaultDropdownSelector = '#nx-filter-dropdown-non-default-example .nx-filter-dropdown',
      labelledDropdownSelector = '#nx-filter-dropdown-example .nx-form-group',
      dropdownMenuItemSelector = `${dropdownSelector} .nx-radio-checkbox:first-child .nx-checkbox__input`;

  describe('NxFilterDropdown when closed', function() {

    it('has a light grey border by default', simpleTest(tableExampleSelector));
    it('has a dark grey border when hovered', hoverTest(tableExampleSelector, toggleSelector));
    it('has a blue inner outline when focused', focusTest(tableExampleSelector, toggleSelector));
    it('has a blue inner outline and dark grey border when focused and hovered',
        focusAndHoverTest(tableExampleSelector, toggleSelector));
    it('has a dark grey border when clicked', clickTest(tableExampleSelector, toggleSelector));
  });

  describe('NxFilterDropdown when open', function() {
    beforeEach(async function() {
      const [button] = await waitAndGetElements(toggleSelector);

      await button.click();
    });

    it('has a blue inner outline when focused with expanded menu', async function() {
      const [targetElement] = await waitAndGetElements(dropdownSelector);

      await moveMouseAway();

      await checkScreenshot(targetElement, 251, 376);
    });

    it('has a dark grey border when not focused with expanded menu', async function() {
      const [targetElement, dropdownMenuItem] = await waitAndGetElements(dropdownSelector, dropdownMenuItemSelector);

      dropdownMenuItem.focus();
      await moveMouseAway();

      await checkScreenshot(targetElement, 251, 376);
    });

    it('has focus, hover, and selection styles for checkboxes', async function() {
      const [dropdownEl, cb1, cb2] = await waitAndGetElements(
          dropdownSelector,
          `${dropdownSelector} .nx-checkbox:first-child`,
          `${dropdownSelector} .nx-checkbox:nth-child(2)`
      );

      // after this cb1 should be selected and focused, cb2 should be hovered
      await cb1.click();
      await cb2.hover();

      await checkScreenshot(dropdownEl, 251, 376);
    });

    describe('NxFilterDropdown reset button', function() {
      const resetBtnSelector = `${dropdownSelector} .nx-filter-dropdown__reset`,
          checkboxSelector = `${dropdownSelector} .nx-checkbox:last-of-type`;

      beforeEach(async function() {
        const [resetBtn] = await waitAndGetElements(resetBtnSelector);
        await scrollIntoView(resetBtn);
      });

      it('looks disabled when no items are selected', simpleTest(tableExampleSelector));

      describe('NxFilterDropdown reset button when items are selected', function() {
        beforeEach(async function() {
          const [checkbox] = await waitAndGetElements(checkboxSelector);

          await checkbox.click();
        });

        it('looks like a link', simpleTest(tableExampleSelector));
        it('has lighter blue text when clicked', clickTest(tableExampleSelector, resetBtnSelector));
        it('has darker text when hovered', hoverTest(tableExampleSelector, resetBtnSelector));
        it('has a blue border when focused',
            focusTest(tableExampleSelector, resetBtnSelector));
      });
    });

    it('passes a11y checks', a11yTest());
  });

  describe('Short NxFilterDropdown', function() {
    it('looks right when open', async function() {
      const [dropdown, button] = await waitAndGetElements(
          shortDropdownSelector,
          shortDropdownSelector + ' .nx-dropdown__toggle'
      );

      await button.click();

      await checkScreenshot(dropdown, 150, 244);
    });
  });

  describe('NxFilterDropdown with custom placeholder and no Reset', function() {
    it('looks right when open', async function() {
      const [dropdown, button] = await waitAndGetElements(
          nonDefaultDropdownSelector,
          nonDefaultDropdownSelector + ' .nx-dropdown__toggle'
      );

      await button.click();

      await checkScreenshot(dropdown, 251, 212);
    });
  });

  describe('NxFilterDropdown with label', function() {
    it('looks right when open', async function() {
      const [formGroup, button] = await waitAndGetElements(
          labelledDropdownSelector,
          labelledDropdownSelector + ' .nx-dropdown__toggle'
      );

      await button.click();

      await checkScreenshot(formGroup, 251, 244);
    });
  });

  it('stays open when a checkbox is clicked', async function() {
    const [button] = await waitAndGetElements(dropdownSelector + ' .nx-dropdown__toggle');

    await button.click();

    const [dropdownMenu, checkbox] = await waitAndGetElements(
        `${dropdownSelector} .nx-dropdown-menu`,
        `${dropdownSelector} .nx-checkbox:first-child`
    );

    await checkbox.click();

    expect(await isInDocument(dropdownMenu)).toBe(true);
  });

  it('closes when a click outside of the dropdown occurs', async function() {
    const [table, button] = await waitAndGetElements(
        tableExampleSelector,
        dropdownSelector + ' .nx-dropdown__toggle'
    );

    await scrollIntoView(table);
    await button.click();

    const [dropdownMenu] = await waitAndGetElements(`${dropdownSelector} .nx-dropdown-menu`);

    // click outside of menu
    await getPage().mouse.click(10, 10);

    expect(await isInDocument(dropdownMenu)).toBe(false);
  });

  it('passes a11y checks', a11yTest());
});
