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
      errorExampleSelector = '#nx-combobox-error-example .nx-combobox',
      disabledExampleSelector = '#nx-combobox-disabled-example .nx-combobox';

  describe('text input', function() {
    const inputSelector = `${basicExampleSelector} .nx-combobox__input input`;

    it('has a dark border by default', simpleTest(basicExampleSelector));

    it('has a darker border when hovered',
        hoverTest(basicExampleSelector, inputSelector));

    it('has a blue border and glow when hovered and focused',
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

  it('shows the dropdown when focused and hides the dropdown when not focused', async function() {
    const inputSelector = `${basicExampleSelector} .nx-combobox__input input`,
        dropdownMenuSelector = `${basicExampleSelector} .nx-dropdown-menu`,
        [input, dropdownMenu] = await waitAndGetElements(inputSelector, dropdownMenuSelector);

    await input.focus();
    expect(await isFocused(input)).toBe(true);
    expect(await isVisible(dropdownMenu)).toBe(true);

    await blurElement(input);
    expect(await isFocused(input)).toBe(false);
    expect(await isVisible(dropdownMenu)).toBe(false);
  });
});
