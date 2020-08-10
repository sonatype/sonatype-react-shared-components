/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxCloseButton', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxCloseButton');
  });

  const selector = '.gallery-example .nx-btn--close';

  it('has no border or visible background by default', simpleTest(selector));
  it('has a dark grey border when hovered', hoverTest(selector));
  it('has a dark grey border and light grey background when clicked', clickTest(selector));
  it('has a light blue border when focused', focusTest(selector));
  it('has a dark grey border when focused and hovered', focusAndHoverTest(selector));
});
