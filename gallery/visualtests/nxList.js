/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('nx-list', function() {
  const {
    hoverTest,
    focusTest,
    simpleTest,
    clickTest,
    disableLoadingSpinnerAnimation,
    a11yTest
  } = setupBrowser('#/pages/List (HTML)');

  const simpleSelector = '#nx-list-simple-example .gallery-example-live',
      clickableSelector = '#nx-list-clickable-example .nx-list',
      clickableLinksSelector = '#nx-list-clickable-links-example .nx-list',
      bulletedSelector = '#nx-list-bulleted-example .gallery-example-live',
      numberedSelector = '#nx-list-numbered-example .gallery-example-live',
      actionsSelector = '#nx-list-actions-example .nx-list',
      multiLineSelector = '#nx-list-multi-line-example .nx-list',
      emptySelector = '#nx-list-empty-example .nx-list',
      errorSelector = '#nx-list-error-example .nx-list',
      loadingSelector = '#nx-list-loading-example .nx-list',
      deprecatedSelector = '#nx-list-deprecated-clickable-example .nx-list';

  describe('Simple nx-list', function() {
    it('looks right', simpleTest(simpleSelector));
  });

  describe('Clickable nx-list', function() {
    it('looks right with a row hovered', hoverTest(clickableSelector, `${clickableSelector} li:first-child button`));

    it('looks right with a row focused', focusTest(clickableSelector, `${clickableSelector} li:first-child button`));

    it('looks right with a row clicked', clickTest(clickableSelector, `${clickableSelector} li:first-child button`));

    it('looks right with a row selected',
        simpleTest(`${clickableSelector} li:nth-of-type(4) button`));
  });

  describe('Clickable links nx-list', function() {
    it('looks right with a row hovered',
        hoverTest(clickableLinksSelector, `${clickableLinksSelector} li:first-child a`));

    it('looks right with a row focused',
        focusTest(clickableLinksSelector, `${clickableLinksSelector} li:first-child a`));

    it('looks right with a row clicked',
        focusTest(clickableLinksSelector, `${clickableLinksSelector} li:first-child a`));

    it('looks right with a row selected',
        simpleTest(`${clickableLinksSelector} li:nth-of-type(2) a`));
  });

  describe('Bulleted nx-list', function() {
    it('looks right', simpleTest(bulletedSelector));
  });

  describe('Ordered nx-list', function() {
    it('looks right', simpleTest(numberedSelector));
  });

  describe('nx-list with actions', function() {
    it('looks right', simpleTest(actionsSelector));
  });

  describe('nx-list with multi-line items', function() {
    it('looks right', simpleTest(multiLineSelector));
  });

  describe('Empty nx-list', function() {
    it('looks right', simpleTest(emptySelector));
  });

  describe('Errored nx-list', function() {
    it('looks right', simpleTest(errorSelector));
  });

  describe('Loading nx-list', function() {
    it('looks right', async function() {
      await disableLoadingSpinnerAnimation();
      await simpleTest(loadingSelector)();
    });
  });

  describe('Deprecated clickable list', function() {
    it('looks right', simpleTest(deprecatedSelector));
  });

  // see comment in the NxListButtonItem source code about aria-selected
  it('passes a11y checks', a11yTest(builder => builder.disableRules(['aria-allowed-attr', 'color-contrast'])));
});
