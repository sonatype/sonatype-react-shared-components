/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxPagination', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxPagination');
  });

  const selector = '#nx-pagination-example .gallery-example-live',
      btnSelector = `${selector} .nx-btn--pagination:nth-child(4)`,
      currentBtnSelector = `${selector} .nx-btn--pagination:nth-child(6)`;

  it('looks right', simpleTest(selector));
  it('puts a border on a hovered button', hoverTest(selector, btnSelector));
  it('puts a blue border and glow on a focused button', focusTest(selector, btnSelector));
  it('puts a blue border and glow on a focused+hovered button', focusAndHoverTest(selector, btnSelector));
  it('puts a dark border and grey background on a clicked button', clickTest(selector, btnSelector));

  it('puts a blue glow on a focused selected button', focusTest(selector, currentBtnSelector));
  it('puts a dark border and grey background on a clicked selected button', clickTest(selector, currentBtnSelector));
});
