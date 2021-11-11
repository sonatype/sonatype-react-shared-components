/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxSubmitMask', function() {
  const { waitAndGetElements, checkFullPageScreenshot, disableLoadingSpinnerAnimation } =
      setupBrowser('#/pages/NxSubmitMask');

  const loadingMaskBtnSelector = '#nx-submit-mask-loading-example button',
      successMaskBtnSelector = '#nx-submit-mask-success-example button';

  it('looks right when loading', async function() {
    const [btn] = await waitAndGetElements(loadingMaskBtnSelector);

    await btn.click();
    await disableLoadingSpinnerAnimation();

    await checkFullPageScreenshot();
  });

  it('looks right when successful', async function() {
    const [btn] = await waitAndGetElements(successMaskBtnSelector);

    await btn.click();

    await checkFullPageScreenshot();
  });
});
