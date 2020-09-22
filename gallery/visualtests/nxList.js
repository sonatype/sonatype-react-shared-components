/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { hoverTest, simpleTest } = require('./testUtils');

describe('nx-list', function() {
  beforeEach(async function() {
    await browser.url('#/pages/nx-list');
  });

  const simpleSelector = '#nx-list-simple-example .gallery-raw-html-example',
      clickableSelector = '#nx-list-clickable-example .nx-list--clickable',
      bulletedSelector = '#nx-list-bulleted-example .gallery-raw-html-example',
      definitionListSelector = '#nx-list-definition-example .gallery-raw-html-example',
      actionsSelector = '#nx-list-actions-example .nx-list',
      multiLineSelector = '#nx-list-multi-line-example .gallery-raw-html-example',
      emptySelector = '#nx-list-empty-example .gallery-raw-html-example',
      errorSelector = '#nx-list-error-example .nx-list';

  describe('Simple nx-list', function() {
    it('looks right', simpleTest(simpleSelector));
  });

  describe('Clickable nx-list', function() {
    it('looks right with a row hovered', hoverTest(clickableSelector, `${clickableSelector} li:first-child`));
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
});
