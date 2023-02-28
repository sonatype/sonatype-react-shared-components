/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxTextInput', function() {
  const {
    simpleTest,
    waitAndGetElements,
    getPage,
    clickTest,
    focusTest,
    hoverTest,
    checkScreenshotCoordinates,
    wait,
    a11yTest
  } = setupBrowser('#/pages/Filter%20Input');

  const simpleComponentSelector = '#nx-filter-input-simple-example .nx-filter-input',
      searchComponentSelector = '#nx-filter-input-search-example .nx-filter-input',
      disabledComponentSelector = '#nx-filter-input-disabled-example .nx-filter-input';

  describe('Simple NxFilterInput', function() {
    it('looks right', simpleTest(simpleComponentSelector));
  });

  describe('Search NxFilterInput', function() {
    it('has a magnifying glass icon', simpleTest(searchComponentSelector));
  });

  describe('Disabled NxFilterInput', function() {
    it('looks disabled', simpleTest(disabledComponentSelector));
  });

  describe('Clear Button', function() {
    beforeEach(async function() {
      const inputSelector = `${simpleComponentSelector} .nx-text-input__input`,
          clearButtonSelector = `${simpleComponentSelector} .nx-btn--clear`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      await getPage().keyboard.type('a');
      await getPage().waitForSelector(clearButtonSelector);
    });

    it('looks right', simpleTest(simpleComponentSelector));
    it('has a dark grey border when hovered', async function() {
      const clearButtonSelector = `${simpleComponentSelector} .nx-btn--clear`;
      await hoverTest(simpleComponentSelector, clearButtonSelector)();
    });

    it('has an inner blue outline when focused', focusTest(simpleComponentSelector));

    it('has a dark grey border and light grey background when clicked', async function() {
      const clearButtonSelector = `${simpleComponentSelector} .nx-btn--clear`;
      await clickTest(simpleComponentSelector, clearButtonSelector)();
    });

    it('shows a "Clear filter" tooltip', async function() {
      const [component, clearButton] = await waitAndGetElements(
          simpleComponentSelector,
          `${simpleComponentSelector} .nx-btn--clear`
      );

      await clearButton.hover();
      await wait(500);

      const { x, y, width, height } = await component.boundingBox();

      await checkScreenshotCoordinates(x, y - 43, width + 70, height + 43);
    });
  });

  it('passes a11y checks', a11yTest());
});
