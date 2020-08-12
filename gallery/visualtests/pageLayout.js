/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest } = require('./testUtils');

describe('Page Layout', function() {
  it('looks right with page scrolling and a sidebar', async function() {
    await browser.url('#/');
    await browser.eyesSnapshot();
  });

  it('looks right with page scrolling and no sidebar', async function() {
    await browser.url('#/?hideSidebar=true');
    await browser.eyesSnapshot();
  });

  it('looks right with default scrolling and a sidebar', async function() {
    await browser.url('#/?disablePageScrolling=true');
    await browser.eyesSnapshot();
  });

  it('looks right with default scrolling and no sidebar', async function() {
    await browser.url('#/?disablePageScrolling=true&hideSidebar=true');
    await browser.eyesSnapshot();
  });
});
