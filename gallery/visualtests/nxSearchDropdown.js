/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxSearchDropdown', function() {
  const {
    simpleTest,
    waitAndGetElements,
    getPage,
    blurElement,
    scrollIntoView,
    disableLoadingSpinnerAnimation,
    checkScreenshot,
    isFocused,
    dismissResultingDialog,
    a11yTest
  } = setupBrowser('#/pages/Search%20Dropdown');

  const basicExampleSelector = '#nx-search-dropdown-basic-example .nx-search-dropdown',
      longExampleSelector = '#nx-search-dropdown-long-example .nx-search-dropdown',
      errorExampleSelector = '#nx-search-dropdown-error-example .nx-search-dropdown',
      longErrorExampleSelector = '#nx-search-dropdown-long-error-example .nx-search-dropdown';

  it('looks right initially', simpleTest(basicExampleSelector));
  it('passes a11y checks', a11yTest());

  describe('when loading', function() {
    beforeEach(async function() {
      const inputSelector = `${basicExampleSelector} .nx-filter-input input`,
          loadingSpinnerSelector = `${basicExampleSelector} .nx-loading-spinner`,
          [component, input] = await waitAndGetElements(
              basicExampleSelector,
              inputSelector
          );

      await scrollIntoView(component);
      await input.focus();
      await getPage().keyboard.type('1');
      await getPage().waitForSelector(loadingSpinnerSelector);
    });

    it('looks right', async function() {
      const [component] = await waitAndGetElements(basicExampleSelector);
      await disableLoadingSpinnerAnimation();
      await checkScreenshot(component, 300, 125);
    });

    // color-contrast rule doesn't work when elements overlap, which of course happens when the dropdown is open
    it('passes a11y checks', a11yTest(builder => builder.disableRules('color-contrast')));
  });

  describe('when displaying results', function() {
    beforeEach(async function() {
      const inputSelector = `${basicExampleSelector} .nx-filter-input input`,
          dropdownButtonSelector = `${basicExampleSelector} .nx-dropdown-button`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      await getPage().keyboard.type('1');
      await getPage().waitForSelector(dropdownButtonSelector);
    });

    it('looks right', async function() {
      const [component] = await waitAndGetElements(basicExampleSelector);
      await checkScreenshot(component, 300, 376);
    });

    it('passes a11y checks', a11yTest(builder => builder.disableRules('color-contrast')));
  });

  describe('with truncated results', function() {
    beforeEach(async function() {
      const inputSelector = `${basicExampleSelector} .nx-filter-input input`,
          dropdownButtonSelector = `${basicExampleSelector} .nx-dropdown-button`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      await getPage().keyboard.type('loo');
      await getPage().waitForSelector(dropdownButtonSelector);
    });

    it('looks right', async function() {
      const [component] = await waitAndGetElements(basicExampleSelector);
      await checkScreenshot(component, 300, 88);
    });
  });

  it('hides the dropdown when not focused', async function() {
    const inputSelector = `${basicExampleSelector} .nx-filter-input input`,
        dropdownButtonSelector = `${basicExampleSelector} .nx-dropdown-button`,
        [component, input] = await waitAndGetElements(
            basicExampleSelector,
            inputSelector
        );

    await scrollIntoView(component);
    await input.focus();
    await getPage().keyboard.type('1');
    await getPage().waitForSelector(dropdownButtonSelector);

    await blurElement(input);

    await checkScreenshot(component, 300, 125);
  });

  describe('when displaying empty message', function() {
    beforeEach(async function() {
      const inputSelector = `${basicExampleSelector} .nx-filter-input input`,
          emptyMessageSelector = `${basicExampleSelector} .nx-search-dropdown__empty-message`,
          [component, input] = await waitAndGetElements(
              basicExampleSelector,
              inputSelector
          );

      await scrollIntoView(component);
      await input.focus();
      await getPage().keyboard.type('asdfasdf');
      await getPage().waitForSelector(emptyMessageSelector);
    });

    it('looks right', async function() {
      const [component] = await waitAndGetElements(basicExampleSelector);
      await checkScreenshot(component, 300, 88);
    });

    it('passes a11y checks', a11yTest(builder => builder.disableRules('color-contrast')));
  });

  describe('when displaying an error', function() {
    beforeEach(async function() {
      const inputSelector = `${errorExampleSelector} .nx-filter-input input`,
          errorSelector = `${errorExampleSelector} .nx-alert--load-error`,
          [component, input] =
              await waitAndGetElements(errorExampleSelector, inputSelector);

      await scrollIntoView(component);
      await input.focus();
      await getPage().keyboard.type('1');
      await getPage().waitForSelector(errorSelector);
    });

    it('looks right', async function() {
      const [component] = await waitAndGetElements(errorExampleSelector);
      await checkScreenshot(component, 300, 195);
    });
  });

  it('looks right with the long variant', async function() {
    const inputSelector = `${longExampleSelector} .nx-filter-input input`,
        dropdownButtonSelector = `${longExampleSelector} .nx-dropdown-button`,
        [component, input] = await waitAndGetElements(
            longExampleSelector,
            inputSelector
        );

    await scrollIntoView(component);
    await input.focus();
    await getPage().keyboard.type('1');
    await getPage().waitForSelector(dropdownButtonSelector);

    await checkScreenshot(component, 800, 376);
  });

  it('looks right with the long variant in error', async function() {
    const inputSelector = `${longErrorExampleSelector} .nx-filter-input input`,
        errorSelector = `${longErrorExampleSelector} .nx-alert--load-error`,
        [component, input] = await waitAndGetElements(
            longErrorExampleSelector,
            inputSelector
        );

    await scrollIntoView(component);
    await input.focus();
    await getPage().keyboard.type('1');
    await getPage().waitForSelector(errorSelector);

    await checkScreenshot(component, 800, 125);
  });

  describe('keynav', function() {
    it('has one tab stop for the input and one for the result list when visible', async function() {
      const [component, input] = await waitAndGetElements(
              basicExampleSelector,
              `${basicExampleSelector} .nx-filter-input input`
          ),
          page = getPage();

      await input.focus();

      // tab-navigate away and back to confirm that the input is a tab stop
      await page.keyboard.down('Shift');
      await page.keyboard.press('Tab');
      await page.keyboard.up('Shift');

      await page.keyboard.press('Tab');

      expect(await isFocused(input)).toBe(true);

      await page.keyboard.press('Tab');

      // component is only one tab stop currently
      expect(await page.evaluate((c) => c.contains(document.activeElement), component)).toBe(false);

      await input.focus();
      await page.keyboard.type('10');
      await waitAndGetElements(`${basicExampleSelector} .nx-loading-spinner`);
      await page.keyboard.press('Tab');

      // component is still only one tab stop, the loading spinner is not tabbable
      expect(await page.evaluate((c) => c.contains(document.activeElement), component)).toBe(false);

      await input.focus();
      const [firstBtn] = await waitAndGetElements(`${basicExampleSelector} .nx-dropdown-button:first-child`);
      await page.keyboard.press('Tab');

      expect(await isFocused(firstBtn)).toBe(true);

      await page.keyboard.press('Tab');

      // result list is a second tab stop, but only one (not one per button)
      expect(await page.evaluate((c) => c.contains(document.activeElement), component)).toBe(false);
    });

    it('moves between result buttons using Up, Down, Home, and End', async function() {
      const [input] = await waitAndGetElements(`${basicExampleSelector} .nx-filter-input input`),
          page = getPage();

      await input.type('1');
      const [firstBtn, secondBtn, secondToLastBtn, lastBtn] = await waitAndGetElements(
          `${basicExampleSelector} .nx-dropdown-button:first-child`,
          `${basicExampleSelector} .nx-dropdown-button:nth-child(2)`,
          `${basicExampleSelector} .nx-dropdown-button:nth-last-child(2)`,
          `${basicExampleSelector} .nx-dropdown-button:last-child`
      );

      await firstBtn.focus();

      await page.keyboard.press('ArrowDown');
      expect(await isFocused(secondBtn)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(firstBtn)).toBe(true);

      await page.keyboard.press('End');
      expect(await isFocused(lastBtn)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(secondToLastBtn)).toBe(true);

      await page.keyboard.press('Home');
      expect(await isFocused(firstBtn)).toBe(true);
    });

    it('moves back to the text input on Shift+Tab from any dropdown button', async function() {
      const [input] = await waitAndGetElements(`${basicExampleSelector} .nx-filter-input input`),
          page = getPage();

      await input.type('1');
      const [secondBtn] = await waitAndGetElements(
          `${basicExampleSelector} .nx-dropdown-button:nth-child(2)`,
      );

      await secondBtn.focus();

      await page.keyboard.down('Shift');
      await page.keyboard.press('Tab');
      await page.keyboard.up('Shift');
      expect(await isFocused(input)).toBe(true);
    });

    it('clears the text and focuses the input when Escape is pressed', async function() {
      const [input] = await waitAndGetElements(`${basicExampleSelector} .nx-filter-input input`),
          page = getPage();

      await input.type('1');
      await waitAndGetElements(`${basicExampleSelector} .nx-dropdown-button:first-child`);

      // check pressing esc on the text input
      await page.keyboard.press('Escape');
      expect(await isFocused(input)).toBe(true);
      expect(await input.evaluate(el => el.value)).toBe('');

      await input.type('1');
      const [firstBtn] = await waitAndGetElements(`${basicExampleSelector} .nx-dropdown-button:first-child`);
      await firstBtn.focus();

      // check pressing esc on a dropdown button
      await page.keyboard.press('Escape');
      expect(await isFocused(input)).toBe(true);
      expect(await input.evaluate(el => el.value)).toBe('');

      const [errorInput] = await waitAndGetElements(`${errorExampleSelector} .nx-filter-input input`);

      await errorInput.type('1');
      const [errorRetryBtn] = await waitAndGetElements(`${errorExampleSelector} .nx-dropdown-menu .nx-btn--error`);
      await errorRetryBtn.focus();

      // check pressing esc on error Retry button
      await page.keyboard.press('Escape');
      expect(await isFocused(errorInput)).toBe(true);
      expect(await errorInput.evaluate(el => el.value)).toBe('');
    });

    it('resets focus to the text input when the dropdown closes due to selection', async function() {
      const [input] = await waitAndGetElements(`${basicExampleSelector} .nx-filter-input input`);

      await input.type('1');
      const [firstBtn] = await waitAndGetElements(`${basicExampleSelector} .nx-dropdown-button:first-child`);

      await firstBtn.focus();

      await dismissResultingDialog(async () => await firstBtn.click());

      expect(await isFocused(input)).toBe(true);
    });

    it('resets focus to the text input when the Retry button disappears', async function() {
      const [input] = await waitAndGetElements(`${errorExampleSelector} .nx-filter-input input`);

      await input.type('1');
      const [retryBtn] = await waitAndGetElements(`${errorExampleSelector} .nx-btn--error`);

      await retryBtn.focus();
      await retryBtn.click();

      expect(await isFocused(input)).toBe(true);
    });

  });
});
