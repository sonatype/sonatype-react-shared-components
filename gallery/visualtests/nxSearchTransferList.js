/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Target } = require('@applitools/eyes-webdriverio');
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest, a11yTest } = require('./testUtils');

describe('NxSearchTransferList', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxSearchTransferList');
    await browser.refresh();
  });

  const simpleListSelector = '#nx-search-transfer-list-example .nx-search-transfer-list',
      complexListSelector = '#nx-search-transfer-list-complex-example .nx-search-transfer-list';

  it('looks right', simpleTest(simpleListSelector));

  describe('NxSearchTransferList when displaying results', function() {
    beforeEach(async function() {
      const inputSelector = `${simpleListSelector} .nx-filter-input input`,
          dropdownButtonSelector = `${simpleListSelector} .nx-dropdown-button`,
          [component, input, dropdownButton] = await Promise.all([
            browser.$(simpleListSelector),
            browser.$(inputSelector),
            browser.$(dropdownButtonSelector)
          ]);

      await component.scrollIntoView({ block: 'end' });
      await input.setValue('1');
      await dropdownButton.waitForDisplayed();
    });

    it('looks right', async function() {
      const component = await browser.$(simpleListSelector);
      await browser.eyesRegionSnapshot(null, Target.region(component));
    });

    it('passes a11y checks', a11yTest());
  });

  it('looks right with complex options', simpleTest(complexListSelector));

  it('passes a11y checks', a11yTest());
});
