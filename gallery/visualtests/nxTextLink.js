/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxTextLink', function() {
  const { clickTest, hoverTest, simpleTest, a11yTest } = setupBrowser('#/pages/Text Link');

  describe('Default NxTextLink', function() {
    const selector = '#nx-text-link-internal-example .gallery-example-live .nx-text-link';

    it('looks right', simpleTest(selector));
    it('is darker blue when hovered', hoverTest(selector));
    it('is lighter blue when clicked', clickTest(selector));

    // NOTE: focus styles are being left up to the browser
  });

  describe('External NxTextLink', function() {
    const selector = '#nx-text-link-external-example .gallery-example-live .nx-text-link';

    it('looks right', simpleTest(selector));
  });

  it('passes a11y checks', a11yTest());

  describe('NxTextLink truncation and wrapping', function() {
    const selector = '#nx-text-link-wrapping-and-truncation-example .gallery-example-live';

    it('looks right', simpleTest(selector));
  });

  describe('button nx-text-link', function() {
    const selector = '#nx-text-link-button-example .gallery-example-live .nx-text-link';

    it('looks right', simpleTest(selector));
  });

  describe('Disabled NxTextLink', function() {
    const selector = '#nx-text-link-internal-example .gallery-example-live .nx-text-link.disabled';

    it('looks disabled', simpleTest(selector));
    it('is not darker blue when hovered', hoverTest(selector));
    it('is not lighter blue when clicked', clickTest(selector));
  });

  describe('Attribute-Disabled button nx-text-link', function() {
    const selector = '#nx-text-link-button-example .gallery-example-live .nx-text-link[disabled]';

    it('looks disabled', simpleTest(selector));
    it('is not darker blue when hovered', hoverTest(selector));
    it('is not lighter blue when clicked', clickTest(selector));
  });

  describe('Classname-Disabled button nx-text-link', function() {
    const selector = '#nx-text-link-button-example .gallery-example-live .nx-text-link.disabled';

    it('looks disabled', simpleTest(selector));
    it('is not darker blue when hovered', hoverTest(selector));
    it('is not lighter blue when clicked', clickTest(selector));
  });
});
