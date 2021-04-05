/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxSubmitMask', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxSubmitMask');
  });

  const loadingMaskBtnSelector = '#nx-submit-mask-loading-example button',
      successMaskBtnSelector = '#nx-submit-mask-success-example button';

  it('looks right when loading', async function() {
    const btn = await browser.$(loadingMaskBtnSelector);

    await btn.scrollIntoView({ block: 'center' });
    await btn.click();

    await browser.eyesSnapshot(null);
  });

  it('looks right when successful', async function() {
    const btn = await browser.$(successMaskBtnSelector);

    await btn.scrollIntoView({ block: 'center' });
    await btn.click();

    await browser.eyesSnapshot(null);
  });
});
