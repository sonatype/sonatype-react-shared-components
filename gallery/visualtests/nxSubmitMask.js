/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest, a11yTest } = require('./testUtils');

describe('NxSubmitMask', function() {
  beforeEach(async function() {
    await browser.url('#/pages/Submit%20Mask');
  });

  const loadingMaskBtnSelector = '#nx-submit-mask-loading-example button',
      successMaskBtnSelector = '#nx-submit-mask-success-example button';

  describe('NxSubmitMask when loading', function() {
    beforeEach(async function() {
      const btn = await browser.$(loadingMaskBtnSelector);

      await btn.scrollIntoView({ block: 'center' });
      await btn.click();
    });

    it('looks right', async function() {
      await browser.eyesSnapshot(null);
    });

    it('passes a11y checks', a11yTest());
  });

  describe('NxSubmitMask when successful', function() {
    beforeEach(async function() {
      const btn = await browser.$(successMaskBtnSelector);

      await btn.scrollIntoView({ block: 'center' });
      await btn.click();
    });

    it('looks right', async function() {
      await browser.eyesSnapshot(null);
    });

    it('passes a11y checks', a11yTest());
  });
});
