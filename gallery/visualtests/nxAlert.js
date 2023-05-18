/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxAlert', function() {
  const { simpleTest, clickTest, focusTest, focusAndHoverTest, hoverTest, a11yTest } = setupBrowser('#/pages/Alert');

  const simpleSelector = '#nx-alert-custom-example .nx-alert',
      successSelector = '#nx-alert-success-example .nx-alert',
      errorSelector = '#nx-alert-error-example .nx-alert',
      infoSelector = '#nx-alert-info-example .nx-alert',
      warningSelector = '#nx-alert-warning-example .nx-alert',
      noCloseSelector = '#nx-alert-no-close-example .nx-alert',
      withLinkSelector = '#nx-alert-with-link-example .nx-alert';

  const runTests = (selector) => {
    it('looks right', simpleTest(selector));
    it('looks right with the close button hovered', hoverTest(selector, `${selector} .nx-btn--close`));
    it('looks right with the close button focused', focusTest(selector, `${selector} .nx-btn--close`));
    it('looks right with the close button clicked', clickTest(selector, `${selector} .nx-btn--close`));
    it('looks right with the close button focused and hovered',
        focusAndHoverTest(selector, `${selector} .nx-btn--close`));
  };

  describe('Custom NxAlert', function() {
    runTests(simpleSelector);
  });

  describe('NxSuccessAlert', function() {
    runTests(successSelector);
  });

  describe('NxErrorAlert', function() {
    runTests(errorSelector);
  });

  describe('NxInfoAlert', function() {
    runTests(infoSelector);
  });

  describe('NxWarningAlert', function() {
    runTests(warningSelector);
  });

  describe('with a link', function() {
    it('looks right', simpleTest(withLinkSelector));
    it('looks right with the link hovered', hoverTest(withLinkSelector, `${withLinkSelector} .nx-text-link`));
    it('looks right with the link focused', focusTest(withLinkSelector, `${withLinkSelector} .nx-text-link`));
    it('looks right with the link clicked', clickTest(withLinkSelector, `${withLinkSelector} .nx-text-link`));
    it('looks right with the link focused and hovered',
        focusAndHoverTest(withLinkSelector, `${withLinkSelector} .nx-text-link`));
  });

  describe('without close button', function() {
    it('looks right', simpleTest(noCloseSelector));
  });

  it('passes a11y checks', a11yTest());
});
