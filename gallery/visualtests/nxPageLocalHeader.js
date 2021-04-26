/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
describe('NxPageLocalHeader', function() {
  it('looks right with full content', async function() {
    await browser.url('#/NxPageLocalHeaderFullExample');
    await browser.eyesSnapshot(null);
  });

  it('looks right without action bar', async function() {
    await browser.url('#/NxPageLocalHeaderNoActionsExample');
    await browser.eyesSnapshot(null);
  });

  it('looks right without back button', async function() {
    await browser.url('#/NxPageLocalHeaderNoBackButtonExample');
    await browser.eyesSnapshot(null);
  });

  it('is completely hidden when empty', async function() {
    await browser.url('#/NxPageLocalHeaderEmptyExample');
    await browser.eyesSnapshot(null);
  });
});
