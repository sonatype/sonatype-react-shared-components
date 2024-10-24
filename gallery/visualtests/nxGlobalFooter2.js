/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxGlobalFooter2', function() {
  const footerSelector = '.nx-global-footer-2';

  describe('without inner sidebar', function() {
    const { getPage, scrollIntoView, wait, waitAndGetElements, checkFullPageScreenshot, a11yTest } =
        setupBrowser('#/NxGlobalFooter2Example', false);

    it('looks right', async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
      await wait(100);
      await scrollIntoView((await waitAndGetElements(footerSelector))[0]);
      await checkFullPageScreenshot();
    });

    it('passes a11y checks', a11yTest(null, true));
  });

  describe('with inner sidebar', function() {
    const { getPage, scrollIntoView, wait, waitAndGetElements, checkFullPageScreenshot, a11yTest } =
        setupBrowser('#/NxGlobalFooter2InnerSidebarExample', false);

    it('looks right', async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
      await wait(100);
      await scrollIntoView((await waitAndGetElements(footerSelector))[0]);
      await checkFullPageScreenshot();
    });

    it('passes a11y checks', a11yTest(null, true));
  });

  describe('with shrinking viewport-sized content', function() {
    const { getPage, scrollIntoView, wait, waitAndGetElements, checkFullPageScreenshot, a11yTest } =
        setupBrowser('#/NxGlobalFooter2ViewportSizedExample', false);

    it('looks right', async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
      await wait(100);
      await scrollIntoView((await waitAndGetElements(footerSelector))[0]);
      await checkFullPageScreenshot();
    });

    it('passes a11y checks', a11yTest(null, true));
  });

  describe('with expanding viewport-sized content', function() {
    const { getPage, scrollIntoView, wait, waitAndGetElements, checkFullPageScreenshot, a11yTest } =
        setupBrowser('#/NxGlobalFooter2ViewportSizedExpandingExample', false);

    it('looks right when empty', async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
      await wait(100);
      await scrollIntoView((await waitAndGetElements(footerSelector))[0]);
      await checkFullPageScreenshot();
    });

    it('passes a11y checks', a11yTest(null, true));
  });
});
