/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

const { setupBrowser } = require('./testUtils');

describe('NxToast', function() {

  const viewportSize = { width: 1366, height: 1000 };

  const launchToastsFromPage = (wait, waitAndGetElements) => async () => {

    const [openToastBtn] = await waitAndGetElements('.nx-btn-bar .nx-btn--secondary');
    await openToastBtn.click();
    await openToastBtn.click();

    await wait(500);

    const [container] = await waitAndGetElements('.nx-toast-container');
    return container;
  };

  const testNxToast = (page, description) => {
    describe(description, function() {
      const {
        checkFullPageScreenshot,
        getPage,
        wait,
        waitAndGetElements,
        a11yTest
      } = setupBrowser(page, false);

      const launchToasts = launchToastsFromPage(wait, waitAndGetElements);

      beforeEach(async function() {
        await getPage().setViewport(viewportSize);
      });

      it('is positioned correctly', async function() {
        await launchToasts();
        await checkFullPageScreenshot();
      });

      it('passes a11y checks', async function() {
        await launchToasts();
        a11yTest();
      });
    });
  };

  testNxToast('#/NxToastComplexLayoutExample', 'with global sidebar and header');
  testNxToast('#/NxToastSimpleLayoutExample', 'with global sidebar and without header');
  testNxToast('#/NxToastLegacySectionScrollingExample', 'with legacy layout and section scrolling');
  testNxToast('#/NxToastLegacyPageScrollingExample', 'with legacy layout and page scrolling');

});
