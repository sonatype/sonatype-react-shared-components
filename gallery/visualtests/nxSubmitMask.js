/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxSubmitMask', function() {
  const { waitAndGetElements, checkFullPageScreenshot, disableLoadingSpinnerAnimation, getPage, a11yTest } =
      setupBrowser('#/pages/Submit%20Mask');

  const loadingMaskBtnSelector = '#nx-submit-mask-loading-example button',
      successMaskBtnSelector = '#nx-submit-mask-success-example button';

  beforeEach(async function() {
    await getPage().setViewport({ width: 1366, height: 1000 });
  });

  describe('when loading', function() {
    beforeEach(async function() {
      const [btn] = await waitAndGetElements(loadingMaskBtnSelector);
      await btn.click();
    });

    it('looks right', async function() {
      await disableLoadingSpinnerAnimation();
      await checkFullPageScreenshot();
    });

    it('passes a11y checks', a11yTest());
  });

  describe('when successful', function() {
    beforeEach(async function() {
      const [btn] = await waitAndGetElements(successMaskBtnSelector);

      await btn.click();
    });

    it('looks right when successful', async function() {
      await checkFullPageScreenshot();
    });

    it('passes a11y checks', a11yTest());
  });
});
