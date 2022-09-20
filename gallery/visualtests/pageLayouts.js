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
      const {
        getPage,
        waitForSelectors,
        disableLoadingSpinnerAnimation
      } = setupBrowser(url, false);

      beforeEach(async function() {
        await getPage().setViewport({ width: 1366, height: 1000 });
      });

      it('looks right', async function() {
        await disableLoadingSpinnerAnimation();
        let screenshot = await getPage().screenshot();
        expect(screenshot).toMatchImageSnapshot();

        await waitForSelectors('.nx-alert');
        screenshot = await getPage().screenshot();
        expect(screenshot).toMatchImageSnapshot();
      });
    });
  }

  describe('Legacy Page Layout', function() {
    describe('with sidebar, system notice, and page scrolling', function() {
      const {
        checkFullPageScreenshot,
        getPage,
        a11yTest
      } = setupBrowser('#/pageLayouts/pageScrolling/LegacySidebarSystemNoticeLayout', false);

      beforeEach(async function() {
        await getPage().setViewport({ width: 1366, height: 1000 });
      });

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });

      it('passes a11y checks', a11yTest(null, true));
    });

    describe('with sidebar, and page scrolling', function() {
      const {
        checkFullPageScreenshot,
        getPage
      } = setupBrowser('#/pageLayouts/pageScrolling/LegacySidebarLayout', false);

      beforeEach(async function() {
        await getPage().setViewport({ width: 1366, height: 1000 });
      });

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with system notice, and page scrolling', function() {
      const {
        checkFullPageScreenshot,
        getPage
      } = setupBrowser('#/pageLayouts/pageScrolling/LegacySystemNoticeLayout', false);

      beforeEach(async function() {
        await getPage().setViewport({ width: 1366, height: 1000 });
      });

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with page scrolling', function() {
      const {
        checkFullPageScreenshot,
        getPage
      } = setupBrowser('#/pageLayouts/pageScrolling/LegacyLayout', false);

      beforeEach(async function() {
        await getPage().setViewport({ width: 1366, height: 1000 });
      });

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with sidebar, system notice, and section scrolling', function() {
      const {
        checkFullPageScreenshot,
        getPage,
        a11yTest
      } = setupBrowser('#/pageLayouts/LegacySidebarSystemNoticeLayout', false);

      beforeEach(async function() {
        await getPage().setViewport({ width: 1366, height: 1000 });
      });

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });

      it('passes a11y checks', a11yTest(null, true));
    });

    describe('with sidebar, and section scrolling', function() {
      const {
        checkFullPageScreenshot,
        getPage
      } = setupBrowser('#/pageLayouts/LegacySidebarLayout', false);

      beforeEach(async function() {
        await getPage().setViewport({ width: 1366, height: 1000 });
      });

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with system notice, and section scrolling', function() {
      const {
        checkFullPageScreenshot,
        getPage
      } = setupBrowser('#/pageLayouts/LegacySystemNoticeLayout', false);

      beforeEach(async function() {
        await getPage().setViewport({ width: 1366, height: 1000 });
      });

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
      const {
        checkFullPageScreenshot,
        getPage,
        a11yTest
      } = setupBrowser('#/pageLayouts/GlobalSidebarHeaderSystemNoticeSidebarLayout', false);

      beforeEach(async function() {
        await getPage().setViewport({ width: 1366, height: 1000 });
      });

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });

      it('passes a11y checks', a11yTest(null, true));
    });

    describe('with sidebar, and header', function() {
      const {
        checkFullPageScreenshot,
        getPage
      } = setupBrowser('#/pageLayouts/GlobalSidebarHeaderSidebarLayout', false);

      beforeEach(async function() {
        await getPage().setViewport({ width: 1366, height: 1000 });
      });

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with system notice, and header', function() {
      const {
        checkFullPageScreenshot,
        getPage
      } = setupBrowser('#/pageLayouts/GlobalSidebarHeaderSystemNoticeLayout', false);

      beforeEach(async function() {
        await getPage().setViewport({ width: 1366, height: 1000 });
      });

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with header', function() {
      const {
        checkFullPageScreenshot,
        getPage
      } = setupBrowser('#/pageLayouts/GlobalSidebarHeaderLayout', false);

      beforeEach(async function() {
        await getPage().setViewport({ width: 1366, height: 1000 });
      });

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with sidebar and system notice', function() {
      const {
        checkFullPageScreenshot,
        getPage
      } = setupBrowser('#/pageLayouts/GlobalSidebarSystemNoticeSidebarLayout', false);

      beforeEach(async function() {
        await getPage().setViewport({ width: 1366, height: 1000 });
      });

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with sidebar', function() {
      const {
        checkFullPageScreenshot,
        getPage
      } = setupBrowser('#/pageLayouts/GlobalSidebarSidebarLayout', false);

      beforeEach(async function() {
        await getPage().setViewport({ width: 1366, height: 1000 });
      });

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with system notice', function() {
      const {
        checkFullPageScreenshot,
        getPage
      } = setupBrowser('#/pageLayouts/GlobalSidebarSystemNoticeLayout', false);

      beforeEach(async function() {
        await getPage().setViewport({ width: 1366, height: 1000 });
      });

      it('looks right', async function() {
        await checkFullPageScreenshot();
      });
    });

    describe('with min content', function() {
      const {
        checkFullPageScreenshot,
        getPage
      } = setupBrowser('#/pageLayouts/GlobalSidebarLayout', false);

      beforeEach(async function() {
        await getPage().setViewport({ width: 1366, height: 1000 });
      });

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
