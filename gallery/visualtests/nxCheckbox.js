/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxCheckbox', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxCheckbox');
  });

  describe('Default NxCheckbox', function() {
    const selector = '#nx-checkbox-default-example .nx-checkbox:nth-child(4)';

    it('has a light grey border and white background by default', simpleTest(selector));
    it('has a black border when hovered', hoverTest(selector));
    it('has a thick blue border and white background when clicked', clickTest(selector));
    it('has a light blue border and glow when focused', focusTest(selector));
    it('has a grey border and no glow when focused and hovered', focusAndHoverTest(selector));
  });

  describe('Attribute-Disabled NxCheckbox', function() {
    const selector = '#nx-checkbox-default-example .nx-radio-checkbox--disabled';

    it('looks disabled by default', simpleTest(selector));
    it('looks disabled when hovered', hoverTest(selector));
    it('looks disabled when clicked', clickTest(selector));
  });
});
