/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxDropdown', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxDropdown');
  });

  const defaultSelector = '#nx-dropdown-scrolling-example .nx-dropdown';

  describe('Default NxDropdown when closed', function() {

    it('has a light grey border by default', simpleTest(defaultSelector));
    it('has a dark grey border when hovered', hoverTest(defaultSelector));
    it('has a light blue border when focused', focusTest(defaultSelector));
    it('has a dark grey border when focused and hovered', focusAndHoverTest(defaultSelector));
    it('has a dark grey border and light grey background when clicked', clickTest(defaultSelector));
  });

  describe('Default NxDropdown when open', function() {
    beforeEach(async function() {
      const button = await browser.$(defaultSelector);

      await button.click();
    });

    it('has a dark blue button border with expanded menu', simpleTest(defaultSelector));
  });
});
