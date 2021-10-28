/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const puppeteer = require('puppeteer');

const pageUrl = `file://${__dirname}/../dist/index.html`;

module.exports = {
  setupBrowser(pageFragmentIdentifier) {
    let browser, page;

    beforeAll(async function() {
      browser = await puppeteer.launch();
      browser.defaultBrowserContext().overridePermissions(pageUrl, ['clipboard-read']);
      page = await browser.newPage();
    });

    afterAll(async function() {
      await browser.close();
    });

    beforeEach(async function() {
      await page.goto(pageUrl + pageFragmentIdentifier);
      await page.mouse.move(0, 0);
    });

    async function blurElement(element) {
      await page.evaluate(function(el) {
        el.blur();
      }, element);
    }

    async function waitForSelectors(...selectors) {
      return Promise.all(selectors.map(s => page.waitForSelector(s)));
    }

    async function getElements(...selectors) {
      return Promise.all(selectors.map(s => page.$(s)));
    }

    async function waitAndGetElements(...selectors) {
      await waitForSelectors(...selectors);
      return await getElements(...selectors);
    }

    async function checkScreenshot(element) {
      const image = await element.screenshot();

      expect(image).toMatchImageSnapshot();
    }

    async function checkScreenshotCoordinates(x, y, height, width) {
      const image = await page.screenshot({ clip: { x, y, height, width } });

      expect(image).toMatchImageSnapshot();
    }

    async function checkFullPageScreenshot() {
      const screenshot = await page.screenshot();
      expect(screenshot).toMatchImageSnapshot();
    }

    async function dismissResultingDialog(action) {
      async function dismissDialog(d) {
        await d.dismiss();
      }

      try {
        page.on('dialog', dismissDialog);
        await action();
      }
      finally {
        page.off('dialog', dismissDialog);
      }
    }

    async function moveMouseAway() {
      await page.mouse.move(0, 0);
    }

    return {
      getBrowser: () => browser,
      getPage: () => page,

      blurElement,
      moveMouseAway,
      dismissResultingDialog,

      waitForSelectors,
      getElements,
      waitAndGetElements,

      checkScreenshot,
      checkFullPageScreenshot,
      checkScreenshotCoordinates,


      simpleTest(selector) {
        return async function() {
          const [element] = await waitAndGetElements(selector);
          await checkScreenshot(element);
        };
      },

      focusTest(elementSelector, focusSelector = elementSelector) {
        return async function() {
          const [targetElement, focusElement] = await waitAndGetElements(elementSelector, focusSelector);

          try {
            await focusElement.focus();
            await checkScreenshot(targetElement);
          }
          finally {
            await blurElement(focusElement);
          }
        };
      },

      hoverTest(elementSelector, hoverSelector = elementSelector) {
        return async function() {
          const [targetElement, focusElement] = await waitAndGetElements(elementSelector, hoverSelector);

          await focusElement.hover();
          await checkScreenshot(targetElement);
        };
      },

      focusAndHoverTest(elementSelector, hoverSelector = elementSelector) {
        return async function() {
          const [targetElement, focusElement] = await waitAndGetElements(elementSelector, hoverSelector);

          try {
            await focusElement.focus();
            await focusElement.hover();
            await checkScreenshot(targetElement);
          }
          finally {
            await blurElement(focusElement);
          }
        };
      },

      clickTest(elementSelector, clickSelector = elementSelector) {
        return async () => {
          const [targetElement, clickElement] = await waitAndGetElements(elementSelector, clickSelector),
              clickElementBox = await clickElement.boundingBox();

          await page.mouse.move(clickElementBox.x, clickElementBox.y);

          async function dismissDialog(d) {
            await d.dismiss();
          }


          await dismissResultingDialog(async () => {
            try {
              await page.mouse.down();
              await checkScreenshot(targetElement);
            }
            finally {
              page.mouse.up();
            }
          });
        };
      },

    };
  }
};
