/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

const { setupBrowser } = require('./testUtils');

describe('NxToast', function() {

  const viewportSize = { width: 1366, height: 1000 };

  const testNxToast = (page, description) => {
    describe(description, function() {
      const {
        checkFullPageScreenshot,
        getPage,
        wait,
        waitAndGetElements,
        a11yTest
      } = setupBrowser(page, false);

      const launchToastsFromPage = async () => {

        const [openToastBtn] = await waitAndGetElements('.nx-btn-bar .nx-btn--secondary');
        await openToastBtn.click();
        await openToastBtn.click();

        // wait for animation
        await wait(500);

        const [container] = await waitAndGetElements('.nx-toast-container');
        return container;
      };

      beforeEach(async function() {
        await getPage().setViewport(viewportSize);
      });

      it('is positioned correctly', async function() {
        await launchToastsFromPage();
        await checkFullPageScreenshot();
      });

      it('passes a11y checks', async function() {
        await launchToastsFromPage();
        await a11yTest(null, true)();
      });
    });
  };

  testNxToast('#/NxToastComplexLayoutExample', 'with global sidebar and header');
  testNxToast('#/NxToastSimpleLayoutExample', 'with global sidebar and without header');
  testNxToast('#/NxToastLegacySectionScrollingExample', 'with legacy layout and section scrolling');
  testNxToast('#/NxToastLegacyPageScrollingExample', 'with legacy layout and page scrolling');

});
