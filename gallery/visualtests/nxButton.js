/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxButton', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxButton');
  });

  describe('Default NxButton', function() {
    const selector = '#nx-button-default-example .nx-btn:not([disabled]):not(.disabled)';

    it('has a blue border and white background by default', simpleTest(selector));
    it('has a blue background when hovered', hoverTest(selector));
    it('has a light blue border and light blue background when clicked', clickTest(selector));
    it('has a light blue border when focused', focusTest(selector));
    it('has a light blue border and blue background when focused and hovered', focusAndHoverTest(selector));
  });

  describe('nx-btn-bar', function() {
    const selector = '#nx-button-default-example .nx-btn-bar';

    it('displays buttons and other text with baseline alignment', simpleTest(selector));
  });

  describe('Attribute-Disabled NxButton', function() {
    const selector = '#nx-button-default-example .nx-btn[disabled]';

    it('looks disabled by default', simpleTest(selector));
    it('looks disabled when hovered', hoverTest(selector));
    it('looks disabled when clicked', clickTest(selector));
    it('looks disabled when focused', focusTest(selector));
    it('looks disabled when focused and hovered', focusAndHoverTest(selector));
  });

  describe('Classname-Disabled NxButton', function() {
    const selector = '#nx-button-default-example .nx-btn.disabled';

    it('looks disabled by default', simpleTest(selector));
    it('looks disabled when hovered', hoverTest(selector));
    it('looks disabled when clicked', clickTest(selector));
    it('looks disabled when focused', focusTest(selector));
    it('looks disabled when focused and hovered', focusAndHoverTest(selector));
  });

  describe('Primary NxButton', function() {
    const selector = '#nx-button-primary-example .nx-btn:not([disabled]):not(.disabled)';

    it('has a bold blue background by default', simpleTest(selector));
    it('has a dark background when hovered', hoverTest(selector));
    it('has a light blue border and light blue background when clicked', clickTest(selector));
    it('has a light blue border when focused', focusTest(selector));
    it('has a light blue border and dark blue background when focused and hovered', focusAndHoverTest(selector));
  });

  describe('Tertiary NxButton', function() {
    const selector = '#nx-button-error-example .nx-btn:not([disabled]):not(.disabled)';

    it('has a red background by default', simpleTest(selector));
    it('has a dark red background when hovered', hoverTest(selector));
    it('has a pink background when clicked', clickTest(selector));
    it('has a light blue border when focused', focusTest(selector));
    it('has a dark red background when focused and hovered', focusAndHoverTest(selector));
  });

  describe('NxButton with icon', function() {
    const selector = '#nx-button-icon-example .nx-btn';

    it('looks right', simpleTest(selector));
  });

  describe('NxButton with icon only', function() {
    const selector = '#nx-button-icon-only-example .nx-btn:first-of-type';

    it('looks right', simpleTest(selector));
  });
});
