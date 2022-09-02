/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

const { setupBrowser } = require('./testUtils');

describe('NxToast', function() {
  const openButton = '.nx-btn-bar .nx-btn--secondary';
  const toastContainer = '.nx-toast-container';
  const viewportSize = { width: 1366, height: 1000 };

  describe('with global sidebar and header', function() {
    const {
      checkFullPageScreenshot,
      getPage,
      wait,
      waitAndGetElements,
      a11yTest
    } = setupBrowser('#/NxToastComplexLayoutExample', false);

    async function launchToasts(toastsContainer, buttonSelector) {

      const [openToastBtn] = await waitAndGetElements(buttonSelector);
      await openToastBtn.click();
      await openToastBtn.click();

      // wait for animation
      await wait(500);

      const [container] = await waitAndGetElements(toastsContainer);
      return container;
    }

    beforeEach(async function() {
      await getPage().setViewport(viewportSize);
    });

    it('is positioned correctly', async function() {
      await launchToasts(toastContainer, openButton);
      await checkFullPageScreenshot();
    });

    it('passes a11y checks', async function() {
      await launchToasts(toastContainer, openButton);
      a11yTest();
    });
  });

  describe('with global sidebar and without header', function() {
    const {
      checkFullPageScreenshot,
      getPage,
      wait,
      waitAndGetElements,
      a11yTest
    } = setupBrowser('#/NxToastSimpleLayoutExample', false);

    async function launchToasts(toastsContainer, buttonSelector) {

      const [openToastBtn] = await waitAndGetElements(buttonSelector);
      await openToastBtn.click();
      await openToastBtn.click();

      await wait(500);

      const [container] = await waitAndGetElements(toastsContainer);
      return container;
    }

    beforeEach(async function() {
      await getPage().setViewport(viewportSize);
    });

    it('is positioned correctly', async function() {
      await launchToasts(toastContainer, openButton);
      await checkFullPageScreenshot();
    });

    it('passes a11y checks', async function() {
      await launchToasts(toastContainer, openButton);
      a11yTest(null, true);
    });
  });

  describe('with legacy layout', function() {
    const {
      checkFullPageScreenshot,
      getPage,
      wait,
      waitAndGetElements,
      a11yTest
    } = setupBrowser('#/NxToastLegacySectionScrollingExample', false);

    async function launchToasts(toastsContainer, buttonSelector) {

      const [openToastBtn] = await waitAndGetElements(buttonSelector);
      await openToastBtn.click();
      await openToastBtn.click();

      await wait(500);

      const [container] = await waitAndGetElements(toastsContainer);
      return container;
    }

    beforeEach(async function() {
      await getPage().setViewport(viewportSize);
    });

    it('is positioned correctly', async function() {
      await launchToasts(toastContainer, openButton);
      await checkFullPageScreenshot();
    });

    it('passes a11y checks', async function() {
      await launchToasts(toastContainer, openButton);
      a11yTest(null, true);
    });
  });
});
