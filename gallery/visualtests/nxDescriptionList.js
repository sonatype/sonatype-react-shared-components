/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxDescriptionList', function() {
  const { hoverTest, focusTest, focusAndHoverTest, clickTest, simpleTest, a11yTest } =
      setupBrowser('#/pages/Description List');

  const simpleSelector = '#nx-description-list-simple-example .gallery-example-live',
      buttonExampleSelector = '#nx-description-list-button-example .gallery-example-live',
      linkExampleSelector = '#nx-description-list-link-example .gallery-example-live';

  describe('simple', function() {
    it('looks right', simpleTest(simpleSelector));
  });

  describe('with button rows', function() {
    const buttonSelector = `${buttonExampleSelector} .nx-list__item:first-child button`,
        disabledButtonSelector = `${buttonExampleSelector} .nx-list__item.disabled button`;

    it('looks right with normal, selected, and disabled rows', simpleTest(buttonExampleSelector));

    it('gives hovered rows a grey background', hoverTest(buttonExampleSelector, buttonSelector));
    it('does not give hovered disabled rows a grey background',
        hoverTest(buttonExampleSelector, disabledButtonSelector));

    it('gives focused rows a blue border and glow', focusTest(buttonExampleSelector, buttonSelector));

    it('gives hovered and focused rows a grey background and blue border and glow',
        focusAndHoverTest(buttonExampleSelector, buttonSelector));

    it('gives clicked rows a blue background', clickTest(buttonExampleSelector, buttonSelector));
    it('does not give clicked disabled rows a blue background',
        clickTest(buttonExampleSelector, disabledButtonSelector));
  });

  describe('with link rows', function() {
    const linkSelector = `${linkExampleSelector} .nx-list__item:first-child a`,
        disabledLinkSelector = `${linkExampleSelector} .nx-list__item.disabled a`;

    it('looks right with normal, selected, and disabled rows', simpleTest(linkExampleSelector));

    it('gives hovered rows a grey background', hoverTest(linkExampleSelector, linkSelector));
    it('does not give hovered disabled rows a grey background', hoverTest(linkExampleSelector, disabledLinkSelector));

    it('gives focused rows a blue border and glow', focusTest(linkExampleSelector, linkSelector));

    it('gives hovered and focused rows a grey background and blue border and glow',
        focusAndHoverTest(linkExampleSelector, linkSelector));

    it('gives clicked rows a blue background', clickTest(linkExampleSelector, linkSelector));
    it('does not give clicked disabled rows a blue background', clickTest(linkExampleSelector, disabledLinkSelector));
  });

  // see comment in the NxListButtonItem source code about aria-selected
  it('passes a11y checks', a11yTest(builder => builder.disableRules(['aria-allowed-attr', 'color-contrast'])));
});
