/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxSearchDropdown', function() {
  const {
    clickTest,
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    waitAndGetElements,
    getPage,
    blurElement,
    scrollIntoView,
    disableLoadingSpinnerAnimation,
    checkScreenshot
  } = setupBrowser('#/pages/Search%20Dropdown');

  const basicExampleSelector = '#nx-search-dropdown-basic-example .nx-search-dropdown',
      longExampleSelector = '#nx-search-dropdown-long-example .nx-search-dropdown',
      errorExampleSelector = '#nx-search-dropdown-error-example .nx-search-dropdown',
      longErrorExampleSelector = '#nx-search-dropdown-long-error-example .nx-search-dropdown';

  it('looks right initially', simpleTest(basicExampleSelector));
  it('looks right when loading', async function() {
    const inputSelector = `${basicExampleSelector} .nx-filter-input input`,
        loadingSpinnerSelector = `${basicExampleSelector} .nx-loading-spinner`,
        [component, input] = await waitAndGetElements(
          basicExampleSelector,
          inputSelector
        );

    const { x, y } = await component.boundingBox();

    await scrollIntoView(component);
    await input.focus();
    await getPage().keyboard.type('1');
    await getPage().waitForSelector(loadingSpinnerSelector);
    await disableLoadingSpinnerAnimation();

    await checkScreenshot(component, 300, 125);
  });

  it('looks right when displaying results', async function() {
    const inputSelector = `${basicExampleSelector} .nx-filter-input input`,
        dropdownButtonSelector = `${basicExampleSelector} .nx-dropdown-button`,
        [component, input] = await waitAndGetElements(
          basicExampleSelector,
          inputSelector
        );

    await input.focus();
    await getPage().keyboard.type('1');
    await getPage().waitForSelector(dropdownButtonSelector);

    await checkScreenshot(component, 300, 376);
  });

  it('looks right with truncated results', async function() {
    const inputSelector = `${basicExampleSelector} .nx-filter-input input`,
        dropdownButtonSelector = `${basicExampleSelector} .nx-dropdown-button`,
        [component, input] = await waitAndGetElements(basicExampleSelector, inputSelector);

    await input.focus();
    await getPage().keyboard.type('loo');
    await getPage().waitForSelector(dropdownButtonSelector);

    await checkScreenshot(component, 300, 88);
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

  it('looks right when displaying the empty message', async function() {
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

    await checkScreenshot(component, 300, 88);
  });

  it('looks right when displaying an error', async function() {
    const inputSelector = `${errorExampleSelector} .nx-filter-input input`,
        errorSelector = `${errorExampleSelector} .nx-alert--load-error`,
        [component, input] =
            await waitAndGetElements(errorExampleSelector, inputSelector);

    await scrollIntoView(component);
    await input.focus();
    await getPage().keyboard.type('1');
    await getPage().waitForSelector(errorSelector);

    await checkScreenshot(component, 300, 195);
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
});
