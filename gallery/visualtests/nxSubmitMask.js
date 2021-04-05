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

  const loadingMaskSelector = '#nx-submit-mask-loading-example .nx-submit-mask',
      successMaskSelector = '#nx-submit-mask-success-example .nx-submit-mask';

  it('looks right when loading', simpleTest(loadingMaskSelector));
  it('looks right when successful', simpleTest(successMaskSelector));
});
