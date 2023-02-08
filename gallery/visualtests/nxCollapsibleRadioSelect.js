/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxCollapsibleRadioSelect', function() {
  const {
    focusTest,
    simpleTest,
    a11yTest,
    wait,
    waitAndGetElements,
    blurElement,
    checkScreenshot
  } = setupBrowser('#/pages/Collapsible Radio-Select');

  const selector = '#nx-collapsible-radio-select-example .nx-collapsible-items--select';

  it('looks right', simpleTest(selector));

  it('looks right when collapsed', async () => {
    const triggerSelector = `${selector} .nx-collapsible-items__trigger`;

    const [targetElement] = await waitAndGetElements(triggerSelector);

    await targetElement.click();
    await blurElement(targetElement);
    await wait(500);
    await checkScreenshot(targetElement);
  });

  describe('NxCollapsibleRadioSelect radio', function() {
    const radioSelector = selector + ' .nx-collapsible-items__child:nth-child(2) .nx-radio-checkbox__input';
    it('has an offsetted blue outer border outline and glow when focused', focusTest(selector, radioSelector));
  });

  it('passes a11y checks', a11yTest());
});
