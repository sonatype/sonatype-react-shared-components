/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
describe('Page Layout', function() {

  describe('Legacy Page Layout', function() {
    it('looks right with sidebar, system notice, and page scrolling', async function() {
      await browser.url('#/pageLayouts/pageScrolling/LegacySidebarSystemNoticeLayout');
      await browser.eyesSnapshot(null);
    });

    it('looks right with sidebar, and page scrolling', async function() {
      await browser.url('#/pageLayouts/pageScrolling/LegacySidebarLayout');
      await browser.eyesSnapshot(null);
    });

    it('looks right with system notice, and page scrolling', async function() {
      await browser.url('#/pageLayouts/pageScrolling/LegacySystemNoticeLayout');
      await browser.eyesSnapshot(null);
    });

    it('looks right with page scrolling', async function() {
      await browser.url('#/pageLayouts/pageScrolling/LegacyLayout');
      await browser.eyesSnapshot(null);
    });

    it('looks right with sidebar, system notice, and section scrolling', async function() {
      await browser.url('#/pageLayouts/LegacySidebarSystemNoticeLayout');
      await browser.eyesSnapshot(null);
    });

    it('looks right with sidebar, and section scrolling', async function() {
      await browser.url('#/pageLayouts/LegacySidebarLayout');
      await browser.eyesSnapshot(null);
    });

    it('looks right with system notice, and section scrolling', async function() {
      await browser.url('#/pageLayouts/LegacySystemNoticeLayout');
      await browser.eyesSnapshot(null);
    });

    it('looks right with section scrolling', async function() {
      await browser.url('#/pageLayouts/LegacyLayout');
      await browser.eyesSnapshot(null);
    });
  });

  describe('Global sidebar page layout', function() {
    it('looks right with sidebar, system notice, and header', async function() {
      await browser.url('#/pageLayouts/GlobalSidebarHeaderSystemNoticeSidebarLayout');
      await browser.eyesSnapshot(null);
    });

    it('looks right with sidebar, and header', async function() {
      await browser.url('#/pageLayouts/GlobalSidebarHeaderSidebarLayout');
      await browser.eyesSnapshot(null);
    });

    it('looks right with system notice, and header', async function() {
      await browser.url('#/pageLayouts/GlobalSidebarHeaderSystemNoticeLayout');
      await browser.eyesSnapshot(null);
    });

    it('looks right with header', async function() {
      await browser.url('#/pageLayouts/GlobalSidebarHeaderLayout');
      await browser.eyesSnapshot(null);
    });

    it('looks right with sidebar and system notice', async function() {
      await browser.url('#/pageLayouts/GlobalSidebarSystemNoticeSidebarLayout');
      await browser.eyesSnapshot(null);
    });

    it('looks right with sidebar', async function() {
      await browser.url('#/pageLayouts/GlobalSidebarSidebarLayout');
      await browser.eyesSnapshot(null);
    });

    it('looks right with system notice', async function() {
      await browser.url('#/pageLayouts/GlobalSidebarSystemNoticeLayout');
      await browser.eyesSnapshot(null);
    });

    it('looks right with min content', async function() {
      await browser.url('#/pageLayouts/GlobalSidebarLayout');
      await browser.eyesSnapshot(null);
    });
  });
});
