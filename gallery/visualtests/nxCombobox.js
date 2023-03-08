/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxCombobox', function() {
  const {
    waitAndGetElements,
    getPage,
    simpleTest,
    hoverTest,
    blurElement,
    isFocused,
    isVisible,
    focusAndHoverTest,
    disableLoadingSpinnerAnimation,
    checkScreenshot,
    clickTest,
    a11yTest
  } = setupBrowser('#/pages/Combobox');

  const basicExampleSelector = '#nx-combobox-basic-example .nx-combobox',
      nonEmptinessExampleSelector = '#nx-combobox-non-emptiness-example .nx-combobox',
      backendExampleSelector = '#nx-combobox-backend-example .nx-combobox',
      filterExampleSelector = '#nx-combobox-filter-input-example .nx-combobox',
      searchExampleSelector = '#nx-combobox-filter-input-search-example .nx-combobox',
      errorExampleSelector = '#nx-combobox-error-example .nx-combobox',
      disabledExampleSelector = '#nx-combobox-disabled-example .nx-combobox';

  describe('text input', function() {
    const inputSelector = `${basicExampleSelector} .nx-combobox__input input`;

    it('has a dark border by default', simpleTest(basicExampleSelector));

    it('has a darker border when hovered',
        hoverTest(basicExampleSelector, inputSelector));

    it('has a blue inner outline when hovered and focused',
        focusAndHoverTest(basicExampleSelector, inputSelector));
  });

  describe('when loading', function() {
    beforeEach(async function() {
      const inputSelector = `${backendExampleSelector} .nx-combobox__input input`,
          loadingSpinnerSelector = `${backendExampleSelector} .nx-loading-spinner`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      await getPage().keyboard.type('1');
      await getPage().waitForSelector(loadingSpinnerSelector);
    });

    it('looks right', async function() {
      const [component] = await waitAndGetElements(backendExampleSelector);
      await disableLoadingSpinnerAnimation();
      await checkScreenshot(component, 300, 130);
    });

    it('passes a11Y checks', a11yTest());
  });

  describe('when displaying results', function() {
    beforeEach(async function() {
      const inputSelector = `${backendExampleSelector} .nx-combobox__input input`,
          dropdownButtonSelector = `${backendExampleSelector} .nx-dropdown-button`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      await getPage().keyboard.type('i');
      await getPage().waitForSelector(dropdownButtonSelector);
    });

    it('looks right', async function() {
      const [component] = await waitAndGetElements(backendExampleSelector);
      await checkScreenshot(component, 300, 376);
    });

    it('passes a11Y checks', a11yTest());
  });

  it('looks right with long variant', async function() {
    const inputSelector = `${basicExampleSelector} .nx-combobox__input input`,
        dropdownButtonSelector = `${basicExampleSelector} .nx-dropdown-button`,
        [component, input] = await waitAndGetElements(basicExampleSelector, inputSelector);

    await input.focus();
    await getPage().keyboard.type('a');
    await getPage().waitForSelector(dropdownButtonSelector);
    await checkScreenshot(component, 800, 376);
  });

  describe('when displaying empty message', function() {
    beforeEach(async function() {
      const inputSelector = `${basicExampleSelector} .nx-combobox__input input`,
          emptyMessageSelector = `${basicExampleSelector} .nx-combobox__empty-message`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      await getPage().keyboard.type('q');
      await getPage().waitForSelector(emptyMessageSelector);
    });

    it('looks right', async function() {
      const [component] = await waitAndGetElements(basicExampleSelector);
      await checkScreenshot(component, 800, 88);
    });

    it('passes a11Y checks', a11yTest());
  });

  it('looks right with truncated results', async function() {
    const inputSelector = `${backendExampleSelector} .nx-combobox__input input`,
        dropdownButtonSelector = `${backendExampleSelector} .nx-dropdown-button`,
        [component, input] = await waitAndGetElements(backendExampleSelector, inputSelector);

    await input.focus();
    await getPage().keyboard.type('loo');
    await getPage().waitForSelector(dropdownButtonSelector);
    await checkScreenshot(component, 300, 88);
  });

  describe('Validation', function() {
    describe('when valid', function() {
      beforeEach(async function() {
        const inputSelector = `${nonEmptinessExampleSelector} .nx-combobox__input input`,
            dropdownButtonSelector = `${nonEmptinessExampleSelector} .nx-dropdown-button`,
            [input] = await waitAndGetElements(inputSelector);

        await input.focus();
        await getPage().keyboard.type('a');
        await getPage().waitForSelector(dropdownButtonSelector);
      });

      it('has validation styles', async function() {
        const [component] = await waitAndGetElements(nonEmptinessExampleSelector);
        await checkScreenshot(component, 150, 184);
      });

      it('passes a11Y checks', a11yTest());
    });

    describe('when invalid', function() {
      beforeEach(async function() {
        const inputSelector = `${nonEmptinessExampleSelector} .nx-combobox__input input`,
            dropdownButtonSelector = `${nonEmptinessExampleSelector} .nx-dropdown-button`,
            [input] = await waitAndGetElements(inputSelector);

        await input.focus();
        await getPage().keyboard.type('a');
        await getPage().waitForSelector(dropdownButtonSelector);
        await getPage().keyboard.press('Backspace');
        await blurElement(input);
      });

      it('has invalid validation styles when invalid', async function() {
        const [component] = await waitAndGetElements(nonEmptinessExampleSelector);
        await checkScreenshot(component, 150, 88);
      });

      it('passes a11Y checks', a11yTest());
    });
  });

  describe('when using a filter input', function() {
    it('has a filter icon', simpleTest(filterExampleSelector));

    it('has a clear button when it has content', async function() {
      const inputSelector = `${filterExampleSelector} .nx-combobox__input input`,
          dropdownButtonSelector = `${filterExampleSelector} .nx-dropdown-button`,
          [component, input] = await waitAndGetElements(filterExampleSelector, inputSelector);

      await input.focus();
      await getPage().keyboard.type('a');
      await getPage().waitForSelector(dropdownButtonSelector);

      await checkScreenshot(component, 300, 184);
    });
  });

  describe('when using a search input', function() {
    it('has a search icon', simpleTest(searchExampleSelector));

    it('has a clear button when it has content', async function() {
      const inputSelector = `${searchExampleSelector} .nx-combobox__input input`,
          dropdownButtonSelector = `${searchExampleSelector} .nx-dropdown-button`,
          [component, input] = await waitAndGetElements(searchExampleSelector, inputSelector);

      await input.focus();
      await getPage().keyboard.type('a');
      await getPage().waitForSelector(dropdownButtonSelector);

      await checkScreenshot(component, 300, 184);
    });
  });

  describe('when displaying an error', function() {
    beforeEach(async function() {
      const inputSelector = `${errorExampleSelector} .nx-combobox__input input`,
          errorSelector = `${errorExampleSelector} .nx-alert--load-error`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      await getPage().keyboard.type('1');
      await getPage().waitForSelector(errorSelector);
    });

    it('looks right', async function() {
      const [component] = await waitAndGetElements(errorExampleSelector);
      await checkScreenshot(component, 300, 195);
    });

    it('passes a11Y checks', a11yTest());
  });

  describe('when disabled', function() {
    it('looks right', simpleTest(disabledExampleSelector));
  });

  describe('dropdown button', function() {
    beforeEach(async function() {
      const inputSelector = `${basicExampleSelector} .nx-combobox__input input`,
          dropdownButtonSelector = `${basicExampleSelector} .nx-dropdown-button`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      await getPage().keyboard.type('a');
      await getPage().waitForSelector(dropdownButtonSelector);
    });

    it('has a blue background when selected', async function() {
      const [component] = await waitAndGetElements(basicExampleSelector);
      await getPage().keyboard.press('ArrowDown');
      await checkScreenshot(component, 800, 376);
    });

    it('has a grey background when hover', async function() {
      const dropdownMenuSelector = `${basicExampleSelector} .nx-dropdown-menu`,
          buttonSelector = `${dropdownMenuSelector} .nx-dropdown-button:first-child`;
      await hoverTest(dropdownMenuSelector, buttonSelector)();
    });

    it('has a light blue border and light blue background when clicked', async function() {
      const dropdownMenuSelector = `${basicExampleSelector} .nx-dropdown-menu`,
          buttonSelector = `${dropdownMenuSelector} .nx-dropdown-button:first-child`;

      await clickTest(dropdownMenuSelector, buttonSelector)();
    });

    it('has a tooltip when configured', async function() {
      const inputSelector = `${backendExampleSelector} .nx-combobox__input input`,
          dropdownButtonSelector = `${backendExampleSelector} .nx-dropdown-button`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      await getPage().keyboard.type('i');
      await getPage().waitForSelector(dropdownButtonSelector);

      const dropdownMenuSelector = `${backendExampleSelector} .nx-dropdown-menu`,
          buttonSelector = `${dropdownMenuSelector} .nx-dropdown-button:nth-child(3)`;
      await hoverTest(dropdownMenuSelector, buttonSelector, true)();
    });
  });

  it('passes a11y checks', a11yTest());

  describe('dropdown display behavior with predetermined list', function() {
    it('shows the dropdown when initially focused', async function() {
      const inputSelector = `${basicExampleSelector} .nx-combobox__input input`,
          dropdownMenuSelector = `${basicExampleSelector} .nx-dropdown-menu`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      expect(await isFocused(input)).toBe(true);

      const [dropdownMenu] = await waitAndGetElements(dropdownMenuSelector);
      expect(await isVisible(dropdownMenu)).toBe(true);
    });

    it('close the dropdown when the input loses focus', async function() {
      const inputSelector = `${basicExampleSelector} .nx-combobox__input input`,
          dropdownMenuSelector = `${basicExampleSelector} .nx-dropdown-menu`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      const [dropdownMenu] = await waitAndGetElements(dropdownMenuSelector);
      expect(await isVisible(dropdownMenu)).toBe(true);

      await blurElement(input);
      expect(await isVisible(dropdownMenu)).toBe(false);
    });

    it('closes dropdown when a selection is made via click', async function() {
      const inputSelector = `${basicExampleSelector} .nx-combobox__input input`,
          dropdownMenuSelector = `${basicExampleSelector} .nx-dropdown-menu`,
          buttonSelector = `${dropdownMenuSelector} .nx-dropdown-button:first-child`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      const [dropdownMenu, firstOptBtn] = await waitAndGetElements(dropdownMenuSelector, buttonSelector);

      await firstOptBtn.click();
      expect(await isVisible(dropdownMenu)).toBe(false);
    });

    it('closes dropdown when a selection is made by hitting "Enter"', async function() {
      const inputSelector = `${basicExampleSelector} .nx-combobox__input input`,
          dropdownMenuSelector = `${basicExampleSelector} .nx-dropdown-menu`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      const [dropdownMenu] = await waitAndGetElements(dropdownMenuSelector);

      await getPage().keyboard.press('ArrowDown');
      await getPage().keyboard.press('Enter');
      expect(await isVisible(dropdownMenu)).toBe(false);
    });

    it('reopens dropdown after selection when input is refocused', async function() {
      const inputSelector = `${basicExampleSelector} .nx-combobox__input input`,
          dropdownMenuSelector = `${basicExampleSelector} .nx-dropdown-menu`,
          buttonSelector = `${dropdownMenuSelector} .nx-dropdown-button:first-child`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      let [dropdownMenu, firstOptBtn] = await waitAndGetElements(dropdownMenuSelector, buttonSelector);

      await firstOptBtn.click();
      expect(await isVisible(dropdownMenu)).toBe(false);

      await blurElement(input);
      expect(await isFocused(input)).toBe(false);

      await input.focus();
      [dropdownMenu] = await waitAndGetElements(dropdownMenuSelector);
      expect(await isVisible(dropdownMenu)).toBe(true);
    });

    it('reopens dropdown after selection when the input is clicked on', async function() {
      const inputSelector = `${basicExampleSelector} .nx-combobox__input input`,
          dropdownMenuSelector = `${basicExampleSelector} .nx-dropdown-menu`,
          buttonSelector = `${dropdownMenuSelector} .nx-dropdown-button:first-child`,
          example = '#nx-combobox-basic-example',
          [input, basicExample] = await waitAndGetElements(inputSelector, example);

      await input.click();
      let [dropdownMenu, firstOptBtn] = await waitAndGetElements(dropdownMenuSelector, buttonSelector);

      await firstOptBtn.click();
      expect(await isVisible(dropdownMenu)).toBe(false);

      // check the dropdown opens with the input having never lost focus
      expect(await isFocused(input)).toBe(true);
      await input.click();
      [dropdownMenu] = await waitAndGetElements(dropdownMenuSelector);
      expect(await isVisible(dropdownMenu)).toBe(true);

      // check the dropdown opens after refocusing the input
      await basicExample.click();
      expect(await isFocused(input)).toBe(false);
      expect(await isVisible(dropdownMenu)).toBe(false);
      await input.click();
      [dropdownMenu] = await waitAndGetElements(dropdownMenuSelector);
      expect(await isFocused(input)).toBe(true);
      expect(await isVisible(dropdownMenu)).toBe(true);
    });
  });

  describe('dropdown display behavior with initially unpopulated list', function() {
    it('shows the dropdown when focused and the user has typed a value', async function() {
      const inputSelector = `${backendExampleSelector} .nx-combobox__input input`,
          dropdownMenuSelector = `${backendExampleSelector} .nx-dropdown-menu`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      // confirm dropdown is not open prior to user typing a value
      expect(await getPage().$(dropdownMenuSelector)).toBe(null);
      await getPage().keyboard.type('i');

      const [dropdownMenu] = await waitAndGetElements(dropdownMenuSelector);
      expect(await isVisible(dropdownMenu)).toBe(true);
    });

    it('close the dropdown when the input loses focus', async function() {
      const inputSelector = `${backendExampleSelector} .nx-combobox__input input`,
          dropdownMenuSelector = `${backendExampleSelector} .nx-dropdown-menu`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      await getPage().keyboard.type('i');

      const [dropdownMenu] = await waitAndGetElements(dropdownMenuSelector);
      expect(await isVisible(dropdownMenu)).toBe(true);

      await blurElement(input);
      expect(await isVisible(dropdownMenu)).toBe(false);
    });

    it('closes dropdown when a selection is made via click', async function() {
      const inputSelector = `${backendExampleSelector} .nx-combobox__input input`,
          dropdownMenuSelector = `${backendExampleSelector} .nx-dropdown-menu`,
          buttonSelector = `${dropdownMenuSelector} .nx-dropdown-button:first-child`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      await getPage().keyboard.type('i');

      const [dropdownMenu, firstOptBtn] = await waitAndGetElements(dropdownMenuSelector, buttonSelector);
      expect(await isVisible(dropdownMenu)).toBe(true);

      await firstOptBtn.click();
      expect(await isVisible(dropdownMenu)).toBe(false);
    });

    it('closes dropdown when a selection is made by hitting "Enter"', async function() {
      const inputSelector = `${backendExampleSelector} .nx-combobox__input input`,
          dropdownMenuSelector = `${backendExampleSelector} .nx-dropdown-menu`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      await getPage().keyboard.type('i');

      const [dropdownMenu] = await waitAndGetElements(dropdownMenuSelector);
      expect(await isVisible(dropdownMenu)).toBe(true);

      await getPage().keyboard.press('ArrowDown');
      await getPage().keyboard.press('Enter');
      expect(await isVisible(dropdownMenu)).toBe(false);
    });

    it('reopens dropdown after selection when input is refocused', async function() {
      const inputSelector = `${backendExampleSelector} .nx-combobox__input input`,
          dropdownMenuSelector = `${backendExampleSelector} .nx-dropdown-menu`,
          buttonSelector = `${dropdownMenuSelector} .nx-dropdown-button:first-child`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      await getPage().keyboard.type('i');

      let [dropdownMenu, firstOptBtn] = await waitAndGetElements(dropdownMenuSelector, buttonSelector);
      await firstOptBtn.click();
      expect(await isVisible(dropdownMenu)).toBe(false);

      await blurElement(input);
      await input.focus();

      [dropdownMenu] = await waitAndGetElements(dropdownMenuSelector);
      expect(await isVisible(dropdownMenu)).toBe(true);
    });

    it('reopens dropdown after selection when the input is clicked on', async function() {
      const inputSelector = `${backendExampleSelector} .nx-combobox__input input`,
          dropdownMenuSelector = `${backendExampleSelector} .nx-dropdown-menu`,
          buttonSelector = `${dropdownMenuSelector} .nx-dropdown-button:first-child`,
          example = '#nx-combobox-backend-example',
          [input, backendExample] = await waitAndGetElements(inputSelector, example);

      await input.click();
      await getPage().keyboard.type('i');

      let [dropdownMenu, firstOptBtn] = await waitAndGetElements(dropdownMenuSelector, buttonSelector);
      await firstOptBtn.click();
      expect(await isVisible(dropdownMenu)).toBe(false);

      // check the dropdown opens with the input having never lost focus
      expect(await isFocused(input)).toBe(true);
      await input.click();
      [dropdownMenu] = await waitAndGetElements(dropdownMenuSelector);
      expect(await isVisible(dropdownMenu)).toBe(true);

      // check the dropdown opens after refocusing the input
      await backendExample.click();
      expect(await isFocused(input)).toBe(false);
      expect(await isVisible(dropdownMenu)).toBe(false);
      await input.click();
      [dropdownMenu] = await waitAndGetElements(dropdownMenuSelector);
      expect(await isFocused(input)).toBe(true);
      expect(await isVisible(dropdownMenu)).toBe(true);
    });
  });
});
