/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
describe('NxSystemNotice', function() {
  describe('NxSystemNotice with global sidebar and multiple notices', function() {
    beforeEach(async function() {
      await browser.url('#/NxSystemNoticeMultipleExample');
    });

    it('looks right', async function() {
      await browser.eyesSnapshot(null);
    });

    it('passes a11y checks', a11yTest());
  });

  describe('NxSystemNotice in traditional page layout', function() {
    beforeEach(async function() {
      await browser.url('#/NxSystemNoticeTraditionalPageExample');
    });

    it('looks right', async function() {
      await browser.eyesSnapshot(null);
    });

    it('passes a11y checks', a11yTest());
  });
});
