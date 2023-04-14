/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxPagination', function() {
  const {
    clickTest,
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    a11yTest
  } = setupBrowser('#/pages/Pagination');

  const selector = '#nx-pagination-example .gallery-example-live',
      btnSelector = `${selector} .nx-btn--pagination:nth-child(4)`,
      currentBtnSelector = `${selector} .nx-btn--pagination:nth-child(6)`,
      arrowBtnSelector = `${selector} .nx-btn:first-child`;

  it('looks right', simpleTest(selector));

  describe('numbered button', function() {
    describe('when not selected', function() {
      it('has a grey background when hovered', hoverTest(selector, btnSelector));
      it('has a blue border when focused', focusTest(selector, btnSelector));
      it('has a blue border and grey background when focused and hovered',
          focusAndHoverTest(selector, btnSelector));
      it('has a light grey background when clicked', clickTest(selector, btnSelector));
    });

    describe('when selected', function() {
      it('has a white inner outline when focused', focusTest(selector, currentBtnSelector));
    });
  });

  describe('arrow button', function() {
    it('has a grey background and dark grey border when hovered', hoverTest(selector, arrowBtnSelector));
    it('has a light grey background and dark grey border when clicked', clickTest(selector, arrowBtnSelector));
    it('has a blue inner outline when focused', focusTest(selector, arrowBtnSelector));
    it('has a blue inner outline, dark grey border and grey background when focused and hovered',
        focusAndHoverTest(selector, arrowBtnSelector));
  });

  it('passes a11y checks', a11yTest());
});
