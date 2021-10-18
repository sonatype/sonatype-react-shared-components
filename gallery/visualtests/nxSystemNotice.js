/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
describe('NxSystemNotice', function() {
  it('looks right with global sidebar and multiple notices', async function() {
    await browser.url('#/NxSystemNoticeMultipleExample');
    await browser.eyesSnapshot(null);
  });

  it('looks right in traditional page layout', async function() {
    await browser.url('#/NxSystemNoticeTraditionalPageExample');
    await browser.eyesSnapshot(null);
  });
});
