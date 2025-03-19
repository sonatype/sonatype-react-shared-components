/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
/*
  nxButton.js is the longest-running visual test, anything further added to the NxButton should be added in this file
 */
const { setupBrowser } = require('./testUtils');

describe('Small NxButton section', function () {
  const selector = '#nx-button-small-example';
  const { simpleTest, hoverTest, clickTest, focusTest, focusAndHoverTest } =
    setupBrowser('#/pages/Button (HTML)');

  describe('Small Primary NxButton', function () {
    const primarySelector = `${selector} .nx-btn-bar:first-child .nx-btn--primary.nx-btn--small`;

    it('has a bold blue background by default', simpleTest(primarySelector));
    it('has a dark background when hovered', hoverTest(primarySelector));
    it('has a light blue background when clicked', clickTest(primarySelector));
    it('has a white inner outline when focused', focusTest(primarySelector));
    it('has a white inner outline and dark blue background when focused and hovered',
        focusAndHoverTest(primarySelector));
  });

  describe('Small Secondary NxButton', function () {
    const secondarySelector = `${selector} .nx-btn-bar:first-child .nx-btn--secondary.nx-btn--small`;

    it('has a blue border and white background by default', simpleTest(secondarySelector));
    it('has a blue background when hovered', hoverTest(secondarySelector));
    it('has a blue border and light blue background when clicked', clickTest(secondarySelector));
    it('has a blue border and darker blue inner outline when focused', focusTest(secondarySelector));
    it('has a blue border, darker blue inner outline and blue background when focused and hovered',
        focusAndHoverTest(secondarySelector));
  });

  describe('Small Tertiary NxButton', function () {
    const tertiarySelector = `${selector} .nx-btn-bar:first-child .nx-btn--tertiary.nx-btn--small`;

    it('has a grey border by default', simpleTest(tertiarySelector));
    it('has a light indigo background when hovered', hoverTest(tertiarySelector));
    it('has a light grey border and light indigo background when clicked', clickTest(tertiarySelector));
    it('has a darker grey inner outline when focused', focusTest(tertiarySelector));
    it('has a darker grey inner outline and light indigo background when focused and hovered',
        focusAndHoverTest(tertiarySelector));
  });

  describe('Small Error NxButton', function () {
    const errorSelector = `${selector} .nx-btn-bar:first-child .nx-btn--error.nx-btn--small`;

    it('has a red background by default', simpleTest(errorSelector));
    it('has a dark red background when hovered', hoverTest(errorSelector));
    it('has a pink background when clicked', clickTest(errorSelector));
    it('has a white inner outline when focused', focusTest(errorSelector));
    it('has a dark red background and white inner outline when focused and hovered', focusAndHoverTest(errorSelector));
  });

  describe('Small Disabled NxButton', function () {
    const disabledSelector =
      '#nx-button-small-example .nx-btn-bar:first-child .nx-btn--small[disabled]';

    it('has disabled styling', simpleTest(disabledSelector));
    it('maintains disabled styling when hovered', hoverTest(disabledSelector));
    it('maintains disabled styling when clicked', clickTest(disabledSelector));
    it('maintains disabled styling when focused', focusTest(disabledSelector));
  });

  describe('Small Button with Icon', function () {
    const withIconSelector = `${selector} #nx-button-small-icon-button`;
    it('looks right', simpleTest(withIconSelector));
  });
});
