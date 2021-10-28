/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('Page Layout', function() {

  function testLoadWrapper(thingsToSee, url) {
    describe('with ' + thingsToSee, function() {
      const { checkFullPageScreenshot, getPage, waitForSelectors } = setupBrowser(url);

      it('looks right', async function() {
        let screenshot = await getPage().screenshot();
        expect(screenshot).toMatchImageSnapshot('loading');

        await waitForSelectors('.nx-alert');
        screenshot = await getPage().screenshot();
        expect(screenshot).toMatchImageSnapshot('error');
      });
    });
  }

  describe('Legacy Page Layout', function() {
    describe('with sidebar, system notice, and page scrolling', function() {
      const { checkFullPageScreenshot } = setupBrowser('#/pageLayouts/pageScrolling/LegacySidebarSystemNoticeLayout');

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with sidebar, and page scrolling', function() {
      const { checkFullPageScreenshot } = setupBrowser('#/pageLayouts/pageScrolling/LegacySidebarLayout');

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with system notice, and page scrolling', function() {
      const { checkFullPageScreenshot } = setupBrowser('#/pageLayouts/pageScrolling/LegacySystemNoticeLayout');

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with page scrolling', function() {
      const { checkFullPageScreenshot } = setupBrowser('#/pageLayouts/pageScrolling/LegacyLayout');

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with sidebar, system notice, and section scrolling', function() {
      const { checkFullPageScreenshot } = setupBrowser('#/pageLayouts/LegacySidebarSystemNoticeLayout');

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with sidebar, and section scrolling', function() {
      const { checkFullPageScreenshot } = setupBrowser('#/pageLayouts/LegacySidebarLayout');

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with system notice, and section scrolling', function() {
      const { checkFullPageScreenshot } = setupBrowser('#/pageLayouts/LegacySystemNoticeLayout');

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('NxLoadWrapper in Legacy Page Layout', function() {
      testLoadWrapper('section scrolling', '#/pageLayouts/LegacyLoadWrapperLayout');
      testLoadWrapper('system notice and section scrolling', '#/pageLayouts/LegacySystemNoticeLoadWrapperLayout');
      testLoadWrapper('page scrolling', '#/pageLayouts/pageScrolling/LegacyLoadWrapperLayout');
      testLoadWrapper('system notice and page scrolling',
          '#/pageLayouts/pageScrolling/LegacySystemNoticeLoadWrapperLayout');
    });
  });

  describe('Global sidebar page layout', function() {
    describe('with sidebar, system notice, and header', function() {
      const { checkFullPageScreenshot } = setupBrowser('#/pageLayouts/GlobalSidebarHeaderSystemNoticeSidebarLayout');

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with sidebar, and header', function() {
      const { checkFullPageScreenshot } = setupBrowser('#/pageLayouts/GlobalSidebarHeaderSidebarLayout');

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with system notice, and header', function() {
      const { checkFullPageScreenshot } = setupBrowser('#/pageLayouts/GlobalSidebarHeaderSystemNoticeLayout');

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with header', function() {
      const { checkFullPageScreenshot } = setupBrowser('#/pageLayouts/GlobalSidebarHeaderLayout');

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with sidebar and system notice', function() {
      const { checkFullPageScreenshot } = setupBrowser('#/pageLayouts/GlobalSidebarSystemNoticeSidebarLayout');

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with sidebar', function() {
      const { checkFullPageScreenshot } = setupBrowser('#/pageLayouts/GlobalSidebarSidebarLayout');

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with system notice', function() {
      const { checkFullPageScreenshot } = setupBrowser('#/pageLayouts/GlobalSidebarSystemNoticeLayout');

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with min content', function() {
      const { checkFullPageScreenshot } = setupBrowser('#/pageLayouts/GlobalSidebarLayout');

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('NxLoadWrapper in Global sidebar page layout', function() {
      testLoadWrapper('system notice and header', '#/pageLayouts/GlobalSidebarHeaderSystemNoticeLoadWrapperLayout');
      testLoadWrapper('header', '#/pageLayouts/GlobalSidebarHeaderLoadWrapperLayout');
      testLoadWrapper('system notice', '#/pageLayouts/GlobalSidebarSystemNoticeLoadWrapperLayout');
      testLoadWrapper('min content', '#/pageLayouts/GlobalSidebarLoadWrapperLayout');
    });
  });
});
