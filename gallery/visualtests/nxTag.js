/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxTag', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxTag');
  });

  describe('Basic NxTag', function() {
    const selector = '#nx-tag-example .test-nx-tag';

    it('looks right', simpleTest(selector));
  });


  describe('NxTag Selectable', function() {
    const selector = '#nx-selectable-tag-example .nx-tag:first-child';

    it('has a grey border and grey background by default', simpleTest(selector));
    it('has a dark grey border when hovered', hoverTest(selector));
    it('has a light blue glow and light blue border when focused', focusTest(selector));
    it('has a light blue glow and dark grey border when focused and hovered', focusAndHoverTest(selector));

    it('has a blue background and white indicator when clicked', async function() {
      await targetElement.click();

      try {
        await browser.eyesRegionSnapshot(null, Target.region(targetElement));
      }
      finally {
        // click again to reset the state
        await targetElement.click();
      }
    });
  });
});
