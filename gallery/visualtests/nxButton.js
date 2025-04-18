/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxButton', function() {
  const {
    clickTest,
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    a11yTest
  } = setupBrowser('#/pages/Button');

  describe('Default NxButton', function() {
    const selector = '#nx-button-default-example .nx-btn:not([disabled]):not(.disabled)';

    it('has a blue border and white background by default', simpleTest(selector));
    it('has a blue background when hovered', hoverTest(selector));
    it('has a blue border and light blue background when clicked', clickTest(selector));
    it('has a blue border and darker blue inner outline when focused', focusTest(selector));
    it('has a blue border, darker blue inner outline and blue background when focused and hovered',
        focusAndHoverTest(selector));
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
    it('has a light blue background when clicked', clickTest(selector));
    it('has a white inner outline when focused', focusTest(selector));
    it('has a white inner outline and dark blue background when focused and hovered', focusAndHoverTest(selector));
  });

  describe('Tertiary NxButton', function() {
    const selector = '#nx-button-tertiary-example .nx-btn:not([disabled]):not(.disabled)';

    it('has a grey border by default', simpleTest(selector));
    it('has a light indigo background when hovered', hoverTest(selector));
    it('has a light grey border and light indigo background when clicked', clickTest(selector));
    it('has a darker grey inner outline when focused', focusTest(selector));
    it('has a darker grey inner outline and light indigo background when focused and hovered',
        focusAndHoverTest(selector));
  });

  describe('Error NxButton', function() {
    const selector = '#nx-button-error-example .nx-btn:not([disabled]):not(.disabled)';

    it('has a red background by default', simpleTest(selector));
    it('has a dark red background when hovered', hoverTest(selector));
    it('has a pink background when clicked', clickTest(selector));
    it('has a white inner outline when focused', focusTest(selector));
    it('has a dark red background and white inner outline when focused and hovered', focusAndHoverTest(selector));
  });

  describe('NxButton with icon', function() {
    const selector = '#nx-button-icon-example .nx-btn';

    it('looks right', simpleTest(selector));
  });

  describe('NxButton with icon only', function() {
    const iconOnlyBtnExample = '#nx-button-icon-only-example .gallery-example-live',
        selector = '#nx-button-icon-only-example .nx-btn:first-of-type';

    it('looks right', simpleTest(selector));

    it('shows tooltips', hoverTest(iconOnlyBtnExample, selector, true));
  });
  describe('nx-btn class on <a>', function() {
    const selector = '#nx-btn-links-example .nx-btn-bar:first-child';
    const disabledSelector = '#nx-btn-links-example .nx-btn-bar:nth-child(2)';
    const smallDisabledSelector = '#nx-btn-links-example .nx-btn-bar:nth-child(3)';

    const { simpleTest, hoverTest, clickTest, focusTest, focusAndHoverTest } = setupBrowser('#/pages/Button (HTML)');

    const buttonTests = (selector) => {
      it('looks right by default', simpleTest(selector));
      it('looks right when hovered', hoverTest(selector));
      it('looks right when clicked', clickTest(selector));
      it('looks right when focused', focusTest(selector));
      it('looks right when focused and hovered',
          focusAndHoverTest(selector));
    };

    describe('Secondary styled button', function() {
      const secondarySelector = selector +
          ' .nx-btn:not(:is(.nx-btn--primary, .nx-btn--tertiary, .nx-btn--error, .nx-btn--small))';
      buttonTests(secondarySelector);
    });

    describe('Primary styled buttons', function() {
      const primarySelector = `${selector} .nx-btn--primary`;
      buttonTests(primarySelector);
    });

    describe('Tertiary styled buttons', function() {
      const tertiarySelector = `${selector} .nx-btn--tertiary`;
      buttonTests(tertiarySelector);
    });

    describe('Error styled buttons', function() {
      const errorSelector = `${selector} .nx-btn--error`;
      buttonTests(errorSelector);
    });

    describe('Small styled buttons', function() {
      const smallSelector = `${selector} .nx-btn--small`;
      buttonTests(smallSelector);
    });

    describe('Disabled styled buttons', function() {
      describe('secondary', function() {
        const selector = disabledSelector +
            ' .nx-btn:not(:is(.nx-btn--primary, .nx-btn--tertiary, .nx-btn--error, .nx-btn--small))';
        buttonTests(selector);
      });
      describe('primary', function() {
        const selector = `${disabledSelector} .nx-btn--primary`;
        buttonTests(selector);
      });
      describe('tertiary', function() {
        const selector = `${disabledSelector} .nx-btn--tertiary`;
        buttonTests(selector);
      });
      describe('error', function() {
        const selector = `${disabledSelector} .nx-btn--error`;
        buttonTests(selector);
      });
      describe('small', function() {
        const selector = `${smallDisabledSelector} .nx-btn--small`;
        buttonTests(selector);
      });
    });
  });

  it('passes a11y checks', a11yTest());
});
