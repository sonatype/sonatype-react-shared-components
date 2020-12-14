/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
describe('nx-viewport-sized', function() {
  it('looks right when shrinking content', async function() {
    await browser.url('#/NxViewportSizedExample');
    await browser.eyesSnapshot(null);
  });

  it('looks right when expanding content', async function() {
    await browser.url('#/NxViewportSizedExpandingExample');
    await browser.eyesSnapshot(null);
  });
});
