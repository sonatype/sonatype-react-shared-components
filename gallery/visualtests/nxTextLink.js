/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

const OUTSET = 8;

describe('NxTextLink', function() {
  const { clickTest, hoverTest, simpleTest, a11yTest, focusTest } = setupBrowser('#/pages/Text Link');

  describe('Default NxTextLink', function() {
    const selector = '#nx-text-link-internal-example .gallery-example-live .nx-text-link';

    it('looks right', simpleTest(selector, OUTSET));
    it('is darker blue when hovered', hoverTest(selector, undefined, undefined, OUTSET));
    it('is lighter blue when clicked', clickTest(selector, undefined, OUTSET));
    it('has a blue border when focused', focusTest(selector, undefined, OUTSET));

    // NOTE: focus styles are being left up to the browser
  });

  describe('External NxTextLink', function() {
    const selector = '#nx-text-link-external-example .gallery-example-live .nx-text-link';

    it('looks right', simpleTest(selector, OUTSET));
    it('has a blue border when focused', focusTest(selector, undefined, OUTSET));
  });

  it('passes a11y checks', a11yTest());

  describe('NxTextLink truncation and wrapping', function() {
    const selector = '#nx-text-link-wrapping-and-truncation-example .gallery-example-live';

    it('looks right', simpleTest(selector, OUTSET));
  });

  describe('button nx-text-link', function() {
    const selector = '#nx-text-link-button-example .gallery-example-live .nx-text-link';

    it('looks right', simpleTest(selector, OUTSET));
    it('has a blue border when focused', focusTest(selector, undefined, OUTSET));
  });

  describe('Disabled NxTextLink', function() {
    const selector = '#nx-text-link-internal-example .gallery-example-live .nx-text-link.disabled';

    it('looks disabled', simpleTest(selector, OUTSET));
    it('is not darker blue when hovered', hoverTest(selector, undefined, undefined, OUTSET));
    it('is not lighter blue when clicked', clickTest(selector, undefined, OUTSET));
  });

  describe('Attribute-Disabled button nx-text-link', function() {
    const selector = '#nx-text-link-button-example .gallery-example-live .nx-text-link[disabled]';

    it('looks disabled', simpleTest(selector, OUTSET));
    it('is not darker blue when hovered', hoverTest(selector, undefined, undefined, OUTSET));
    it('is not lighter blue when clicked', clickTest(selector, undefined, undefined, OUTSET));
  });

  describe('Classname-Disabled button nx-text-link', function() {
    const selector = '#nx-text-link-button-example .gallery-example-live .nx-text-link.disabled';

    it('looks disabled', simpleTest(selector, undefined, undefined, OUTSET));
    it('is not darker blue when hovered', hoverTest(selector, undefined, undefined, OUTSET));
    it('is not lighter blue when clicked', clickTest(selector, undefined, OUTSET));
  });
});
