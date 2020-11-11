/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Target } = require('@applitools/eyes-webdriverio');
const { focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('nx-form-select', function() {
  const selector = '#nx-form-select-example .nx-form-select',
      disabledSelector = '#nx-form-select-disabled-example .nx-form-select';

  beforeEach(async function() {
    await browser.url('#/pages/nx-form-select');
  });

  describe('Simple NxFormSelect', function() {
    it('has a light border by default', simpleTest(selector));

    it('has a dark border when hovered',
        hoverTest(selector));

        it('has a blue border when focused',
        focusTest(selector));

    it('has a blue border when hovered and focused',
        focusAndHoverTest(selector));
  });

  describe('Disabled NxFormSelect', function() {
    it('looks disabled', simpleTest(disabledSelector));
  });
});
