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
    blurElement,
    disableLoadingSpinnerAnimation,
    checkScreenshot,
    a11yTest
  } = setupBrowser('#/pages/Combobox');

  const basicExampleSelector = '#nx-combobox-basic-example .nx-combobox',
      nonEmptinessExampleSelector = '#nx-combobox-non-emptiness-example .nx-combobox',
      backendExampleSelector = '#nx-combobox-backend-example .nx-combobox',
      errorExampleSelector = '#nx-combobox-error-example .nx-combobox',
      disabledExampleSelector = '#nx-combobox-disabled-example .nx-combobox';

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
      await getPage().keyboard.type('1');
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

  it('looks right with short variant', async function() {
    const inputSelector = `${nonEmptinessExampleSelector} .nx-combobox__input input`,
        dropdownButtonSelector = `${nonEmptinessExampleSelector} .nx-dropdown-button`,
        [component, input] = await waitAndGetElements(nonEmptinessExampleSelector, inputSelector);

    await input.focus();
    await getPage().keyboard.type('a');
    await getPage().waitForSelector(dropdownButtonSelector);
    await checkScreenshot(component, 150, 376);
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
        await checkScreenshot(component, 150, 376);
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

  describe('close the dropdown when not focused', function() {
    it('looks right', async function() {
      const inputSelector = `${basicExampleSelector} .nx-combobox__input input`,
          dropdownButtonSelector = `${basicExampleSelector} .nx-dropdown-button`,
          [component, input] = await waitAndGetElements(basicExampleSelector, inputSelector);

      await input.focus();
      await getPage().keyboard.type('a');
      await getPage().waitForSelector(dropdownButtonSelector);
      await blurElement(input);
      await checkScreenshot(component, 800, 55);
    });
  });

  describe('dropdown button has a blue background when selected', function() {
    it('looks right', async function() {
      const inputSelector = `${basicExampleSelector} .nx-combobox__input input`,
          dropdownButtonSelector = `${basicExampleSelector} .nx-dropdown-button`,
          [component, input] = await waitAndGetElements(basicExampleSelector, inputSelector);

      await input.focus();
      await getPage().keyboard.type('a');
      await getPage().waitForSelector(dropdownButtonSelector);
      await getPage().keyboard.press('ArrowDown');
      await checkScreenshot(component, 800, 376);
    });
  });

  it('passes a11y checks', a11yTest());
});
