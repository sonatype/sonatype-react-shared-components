/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { hoverTest, simpleTest } = require('./testUtils');

describe('NxList', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxList');
  });

  const simpleSelector = '#nx-list-simple-example .gallery-example-live',
      clickableSelector = '#nx-list-clickable-example .gallery-example-live',
      clickableLinksSelector = '#nx-list-clickable-links-example .gallery-example-live',
      bulletedSelector = '#nx-list-bulleted-example .gallery-example-live',
      actionsSelector = '#nx-list-actions-example .gallery-example-live',
      multiLineSelector = '#nx-list-multi-line-example .gallery-example-live',
      emptySelector = '#nx-list-empty-example .gallery-example-live',
      errorSelector = '#nx-list-error-example .gallery-example-live',
      loadingSelector = '#nx-list-loading-example .gallery-example-live',
      descriptionSelector = '#nx-list-description-example .gallery-example-live';

  describe('Simple nx-list', function() {
    it('looks right', simpleTest(simpleSelector));
  });

  describe('Clickable nx-list', function() {
    it('looks right with a row hovered', hoverTest(clickableSelector, `${clickableSelector} li:first-child`));
  });

  describe('Clickable links nx-list', function() {
    it('looks right with a row hovered', hoverTest(clickableLinksSelector, `${clickableLinksSelector} li:first-child`));
  });

  describe('Bulleted nx-list', function() {
    it('looks right', simpleTest(bulletedSelector));
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
    it('looks right', simpleTest(loadingSelector));
  });

  describe('Description nx-list', function() {
    it('looks right', simpleTest(descriptionSelector));
  });

});
