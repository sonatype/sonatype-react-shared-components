/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Region, Target } = require('@applitools/eyes-webdriverio');
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxSearchDropdown', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxSearchDropdown');
    await browser.refresh();
  });

  const basicExampleSelector = '#nx-search-dropdown-basic-example .nx-search-dropdown',
      longExampleSelector = '#nx-search-dropdown-long-example .nx-search-dropdown',
      errorExampleSelector = '#nx-search-dropdown-error-example .nx-search-dropdown',
      longErrorExampleSelector = '#nx-search-dropdown-long-error-example .nx-search-dropdown';

  it('looks right initially', simpleTest(basicExampleSelector));
  it('looks right when loading', async function() {
    const inputSelector = `${basicExampleSelector} .nx-filter-input input`,
        loadingSpinnerSelector = `${basicExampleSelector} .nx-loading-spinner`,
        [component, input, loadingSpinner] = await Promise.all([
          browser.$(basicExampleSelector),
          browser.$(inputSelector),
          browser.$(loadingSpinnerSelector)
        ]);

    await input.scrollIntoView({ block: 'center' });
    const { x, y } = await component.getLocation();
    const region = new Region(parseInt(x, 10), parseInt(y, 10), 300, 125);

    await input.setValue('1');
    await loadingSpinner.waitForDisplayed();

    await browser.eyesRegionSnapshot(null, Target.region(region));
  });

  it('looks right when displaying results', async function() {
    const inputSelector = `${basicExampleSelector} .nx-filter-input input`,
        dropdownButtonSelector = `${basicExampleSelector} .nx-dropdown-button`,
        [component, input, dropdownButton] = await Promise.all([
          browser.$(basicExampleSelector),
          browser.$(inputSelector),
          browser.$(dropdownButtonSelector)
        ]);

    await input.scrollIntoView({ block: 'center' });
    await input.setValue('1');
    await dropdownButton.waitForDisplayed();

    const { x, y } = await component.getLocation();
    const region = new Region(parseInt(x, 10), parseInt(y, 10), 300, 376);

    await browser.eyesRegionSnapshot(null, Target.region(region));
  });

  it('looks right with a truncated results', async function() {
    const inputSelector = `${basicExampleSelector} .nx-filter-input input`,
        dropdownButtonSelector = `${basicExampleSelector} .nx-dropdown-button`,
        [component, input, dropdownButton] = await Promise.all([
          browser.$(basicExampleSelector),
          browser.$(inputSelector),
          browser.$(dropdownButtonSelector)
        ]);

    await input.scrollIntoView({ block: 'center' });
    await input.setValue('loo');
    await dropdownButton.waitForDisplayed();

    const { x, y } = await component.getLocation();
    const region = new Region(parseInt(x, 10), parseInt(y, 10), 300, 88);

    await browser.eyesRegionSnapshot(null, Target.region(region));
  });

  it('hides the dropdown when not focused', async function() {
    const inputSelector = `${basicExampleSelector} .nx-filter-input input`,
        dropdownButtonSelector = `${basicExampleSelector} .nx-dropdown-button`,
        [component, input, dropdownButton] = await Promise.all([
          browser.$(basicExampleSelector),
          browser.$(inputSelector),
          browser.$(dropdownButtonSelector)
        ]);

    await input.scrollIntoView({ block: 'center' });
    await input.setValue('1');
    await dropdownButton.waitForDisplayed();

    await browser.execute(function(inputEl) {
      inputEl.blur();
    }, input);

    const { x, y } = await component.getLocation();
    const region = new Region(parseInt(x, 10), parseInt(y, 10), 300, 125);

    await browser.eyesRegionSnapshot(null, Target.region(region));
  });

  it('looks right when displaying the empty message', async function() {
    const inputSelector = `${basicExampleSelector} .nx-filter-input input`,
        emptyMessageSelector = `${basicExampleSelector} .nx-search-dropdown__empty-message`,
        [component, input, emptyMessage] = await Promise.all([
          browser.$(basicExampleSelector),
          browser.$(inputSelector),
          browser.$(emptyMessageSelector)
        ]);

    await input.scrollIntoView({ block: 'center' });
    await input.setValue('asdfasdf');
    await emptyMessage.waitForDisplayed();

    const { x, y } = await component.getLocation();
    const region = new Region(parseInt(x, 10), parseInt(y, 10), 300, 88);

    await browser.eyesRegionSnapshot(null, Target.region(region));
  });

  it('looks right when displaying an error', async function() {
    const inputSelector = `${errorExampleSelector} .nx-filter-input input`,
        errorSelector = `${errorExampleSelector} .nx-alert--load-error`,
        [component, input, errorAlert] =
            await Promise.all([browser.$(errorExampleSelector), browser.$(inputSelector), browser.$(errorSelector)]);

    await input.scrollIntoView({ block: 'center' });
    await input.setValue('1');
    await errorAlert.waitForDisplayed();

    const { x, y } = await component.getLocation();
    const region = new Region(parseInt(x, 10), parseInt(y, 10), 300, 195);

    await browser.eyesRegionSnapshot(null, Target.region(region));
  });

  it('looks right with the long variant', async function() {
    const inputSelector = `${longExampleSelector} .nx-filter-input input`,
        dropdownButtonSelector = `${longExampleSelector} .nx-dropdown-button`,
        [component, input, dropdownButton] = await Promise.all([
          browser.$(longExampleSelector),
          browser.$(inputSelector),
          browser.$(dropdownButtonSelector)
        ]);

    await input.scrollIntoView({ block: 'center' });
    await input.setValue('1');
    await dropdownButton.waitForDisplayed();

    const { x, y } = await component.getLocation();
    const region = new Region(parseInt(x, 10), parseInt(y, 10), 800, 376);

    await browser.eyesRegionSnapshot(null, Target.region(region));
  });

  it('looks right with the long variant in error', async function() {
    const inputSelector = `${longErrorExampleSelector} .nx-filter-input input`,
        errorSelector = `${longErrorExampleSelector} .nx-alert--load-error`,
        [component, input, errorAlert] = await Promise.all([
          browser.$(longErrorExampleSelector),
          browser.$(inputSelector),
          browser.$(errorSelector)
        ]);

    await input.scrollIntoView({ block: 'center' });
    await input.setValue('1');
    await errorAlert.waitForDisplayed();

    const { x, y } = await component.getLocation();
    const region = new Region(parseInt(x, 10), parseInt(y, 10), 800, 124);

    await browser.eyesRegionSnapshot(null, Target.region(region));
  });
});
