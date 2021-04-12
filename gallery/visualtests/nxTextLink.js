/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxTextLink', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxTextLink');
  });

  describe('Default NxTextLink', function() {
    const selector = '#nx-text-link-internal-example .nx-text-link';

    it('looks right', simpleTest(selector));
    it('is darker blue when hovered', hoverTest(selector));
    it('is lighter blue when clicked', clickTest(selector));

    // NOTE: focus styles are being left up to the browser
  });

  describe('External NxTextLink', function() {
    const selector = '#nx-text-link-external-example .nx-text-link';

    it('looks right', simpleTest(selector));
  });
});
